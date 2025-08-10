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
    productivityChallenge: v.optional(v.string()),
    currentTools: v.optional(v.array(v.string())),
    excitedFeature: v.optional(v.string()),
    pricingPreference: v.optional(v.string()),
    userRole: v.optional(v.string()),
    source: v.optional(v.string()),
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