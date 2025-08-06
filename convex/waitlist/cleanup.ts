// File: convex/waitlist/cleanup.ts (keep existing content)
import { internalMutation } from "../_generated/server";

const ACTIVE_SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes
const WAITING_SESSION_TIMEOUT = 60 * 60 * 1000; // 1 hour

export const cleanupExpiredSessions = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Your existing cleanup logic
    const now = Date.now();

    const expiredActiveSessions = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .filter((q) => q.lt(q.field("lastActive"), now - ACTIVE_SESSION_TIMEOUT))
      .collect();

    for (const session of expiredActiveSessions) {
      await ctx.db.delete(session._id);
    }

    const expiredWaitingSessions = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "waiting"))
      .filter((q) => q.lt(q.field("lastActive"), now - WAITING_SESSION_TIMEOUT))
      .collect();

    for (const session of expiredWaitingSessions) {
      await ctx.db.delete(session._id);
    }

    const remainingWaiting = await ctx.db
      .query("waitlist_sessions")
      .withIndex("by_status", (q) => q.eq("status", "waiting"))
      .order("asc")
      .collect();

    for (let i = 0; i < remainingWaiting.length; i++) {
      await ctx.db.patch(remainingWaiting[i]._id, {
        position: i + 1,
      });
    }

    return {
      cleanedActive: expiredActiveSessions.length,
      cleanedWaiting: expiredWaitingSessions.length,
    };
  },
});
