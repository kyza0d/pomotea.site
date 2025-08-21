import { query } from "../_generated/server";
import { v } from "convex/values";

export const getSessionStatus = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_session_id", (q) => q.eq("sessionId", args.sessionId))
      .first();

    if (!session) {
      return null;
    }

    const waitingCount = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "waiting"))
      .collect();

    return {
      ...session,
      totalWaiting: waitingCount.length,
    };
  },
});

export const getWaitlistStats = query({
  args: {},
  handler: async (ctx) => {
    const activeCount = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    const waitingCount = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "waiting"))
      .collect();

    return {
      activeCount: activeCount.length,
      waitingCount: waitingCount.length,
    };
  },
});

export const getWaitlistCount = query({
  args: {},
  handler: async (ctx) => {
    const allSessions = await ctx.db
      .query("waitlist_sessions")
      .collect();
    
    return {
      totalCount: allSessions.length,
    };
  },
});

export const getHypeCounter = query({
  args: {},
  handler: async (ctx) => {
    const counter = await ctx.db
      .query("waitlist_counter")
      .withIndex("by_name", (q) => q.eq("name", "hype"))
      .first();
    
    return {
      count: counter?.count || 19, // Default to 19 if not found
    };
  },
});