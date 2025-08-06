import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.interval(
  "cleanup expired sessions",
  { minutes: 1 },
  internal.waitlist.cleanup.cleanupExpiredSessions,
);

export default crons;
