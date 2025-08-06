import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist_sessions: defineTable({
    sessionId: v.string(),
    status: v.union(v.literal("waiting"), v.literal("active")),
    position: v.number(),
    lastActive: v.number(),
    email: v.string(),
    name: v.string(),
  })
    .index("by_session_id", ["sessionId"])
    .index("by_status", ["status"])
    .index("by_position", ["position"]),
  
  waitlist_counter: defineTable({
    name: v.string(),
    count: v.number(),
  })
    .index("by_name", ["name"]),
});