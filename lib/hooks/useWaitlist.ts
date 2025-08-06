"use client";

import { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useWaitlist(sessionId?: string) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const sessionStatus = useQuery(
    api.waitlist.queries.getSessionStatus,
    sessionId ? { sessionId } : "skip"
  );

  const waitlistStats = useQuery(api.waitlist.queries.getWaitlistStats);

  const joinWaitlistMutation = useMutation(api.waitlist.mutations.joinWaitlist);
  const refreshSessionMutation = useMutation(api.waitlist.mutations.refreshSession);

  const joinWaitlist = useCallback(
    async (data: { sessionId: string; email: string; name: string }) => {
      try {
        const result = await joinWaitlistMutation(data);
        return { success: true, data: result };
      } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
      }
    },
    [joinWaitlistMutation]
  );

  const refreshSession = useCallback(
    async (sessionId: string) => {
      if (isRefreshing) return;
      
      setIsRefreshing(true);
      try {
        await refreshSessionMutation({ sessionId });
      } catch (error) {
        console.error("Failed to refresh session:", error);
      } finally {
        setIsRefreshing(false);
      }
    },
    [refreshSessionMutation, isRefreshing]
  );

  // Auto-refresh active sessions every 30 seconds
  useEffect(() => {
    if (!sessionId || !sessionStatus || sessionStatus.status !== "active") {
      return;
    }

    const interval = setInterval(() => {
      refreshSession(sessionId);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [sessionId, sessionStatus, refreshSession]);

  return {
    sessionStatus,
    waitlistStats,
    joinWaitlist,
    refreshSession,
    isRefreshing,
  };
}