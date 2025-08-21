import { mutation } from "../_generated/server";
import { v } from "convex/values";

const ACTIVE_SESSIONS_LIMIT = 100; // Can be made configurable via env vars
const DEFAULT_HYPE_COUNT = 19; // Starting fake hype counter

// Helper function to increment the hype counter
const incrementHypeCounter = async (ctx: any) => {
  const counter = await ctx.db
    .query("waitlist_counter")
    .withIndex("by_name", (q: any) => q.eq("name", "hype"))
    .first();

  if (counter) {
    await ctx.db.patch(counter._id, {
      count: counter.count + 1,
    });
  } else {
    // Initialize counter with default value + 1 (since this is the first signup)
    await ctx.db.insert("waitlist_counter", {
      name: "hype",
      count: DEFAULT_HYPE_COUNT + 1,
    });
  }
};

export const joinWaitlist = mutation({
  args: { 
    sessionId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if session already exists
    const existingSession = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_session_id", (q) => q.eq("sessionId", args.sessionId))
      .first();

    if (existingSession) {
      return existingSession;
    }

    // Check if email already exists
    const existingEmail = await ctx.db
      .query("waitlist_sessions")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (existingEmail) {
      throw new Error("Email already registered for waitlist");
    }

    // Get current active sessions count
    const activeSessions = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    const isActive = activeSessions.length < ACTIVE_SESSIONS_LIMIT;
    const status = isActive ? "active" : "waiting";

    // Get position for waiting users
    let position = 0;
    if (!isActive) {
      const waitingSessions = await ctx.db
        .query("waitlist_sessions")
        .withIndex("by_status", (q) => q.eq("status", "waiting"))
        .collect();
      position = waitingSessions.length + 1;
    }

    // Increment the hype counter
    await incrementHypeCounter(ctx);

    const session = await ctx.db.insert("waitlist_sessions", {
      sessionId: args.sessionId,
      status,
      position,
      lastActive: Date.now(),
      email: args.email,
      name: args.name,
    });

    return await ctx.db.get(session);
  },
});

export const refreshSession = mutation({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_session_id", (q) => q.eq("sessionId", args.sessionId))
      .first();

    if (!session) {
      throw new Error("Session not found");
    }

    await ctx.db.patch(session._id, {
      lastActive: Date.now(),
    });

    return session;
  },
});

export const promoteWaitingUsers = mutation({
  args: {},
  handler: async (ctx) => {
    const activeSessions = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    const availableSlots = ACTIVE_SESSIONS_LIMIT - activeSessions.length;
    
    if (availableSlots <= 0) {
      return { promoted: 0 };
    }

    const waitingSessions = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "waiting"))
      .order("asc")
      .take(availableSlots);

    let promoted = 0;
    for (const session of waitingSessions) {
      await ctx.db.patch(session._id, {
        status: "active",
        position: 0,
      });
      promoted++;
    }

    // Update positions for remaining waiting users
    const remainingWaiting = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "waiting"))
      .collect();

    for (let i = 0; i < remainingWaiting.length; i++) {
      await ctx.db.patch(remainingWaiting[i]._id, {
        position: i + 1,
      });
    }

    return { promoted };
  },
});

export const updateWaitlistData = mutation({
  args: { 
    sessionId: v.string(),
    productivityChallenge: v.optional(v.string()),
    currentTools: v.optional(v.array(v.string())),
    excitedFeature: v.optional(v.string()),
    pricingPreference: v.optional(v.string()),
    userRole: v.optional(v.string()),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { sessionId, ...data } = args;
    const session = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_session_id", (q) => q.eq("sessionId", sessionId))
      .first();

    if (!session) {
      throw new Error("Session not found");
    }

    await ctx.db.patch(session._id, { 
      ...data,
      lastActive: Date.now(),
    });
    return { success: true };
  },
});

export const completeWaitlistSignup = mutation({
  args: { 
    sessionId: v.string(),
    email: v.string(),
    name: v.string(),
    productivityChallenge: v.string(),
    currentTools: v.array(v.string()),
    excitedFeature: v.string(),
    pricingPreference: v.string(),
    userRole: v.string(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existingEmail = await ctx.db
      .query("waitlist_sessions")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (existingEmail) {
      return { success: false, error: "Email already registered for waitlist" };
    }

    // Get current active sessions count
    const activeSessions = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    const isActive = activeSessions.length < ACTIVE_SESSIONS_LIMIT;
    const status = isActive ? "active" : "waiting";

    // Get position for waiting users
    let position = 0;
    if (!isActive) {
      const waitingSessions = await ctx.db
        .query("waitlist_sessions")
        .withIndex("by_status", (q) => q.eq("status", "waiting"))
        .collect();
      position = waitingSessions.length + 1;
    }

    // Increment the hype counter
    await incrementHypeCounter(ctx);

    // Create complete waitlist entry
    const session = await ctx.db.insert("waitlist_sessions", {
      sessionId: args.sessionId,
      status,
      position,
      lastActive: Date.now(),
      email: args.email,
      name: args.name,
      productivityChallenge: args.productivityChallenge,
      currentTools: args.currentTools,
      excitedFeature: args.excitedFeature,
      pricingPreference: args.pricingPreference,
      userRole: args.userRole,
      source: args.source,
    });

    const sessionData = await ctx.db.get(session);
    return { success: true, data: sessionData };
  },
});