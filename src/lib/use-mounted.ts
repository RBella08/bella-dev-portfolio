"use client";

import { useSyncExternalStore } from "react";

function subscribeNoop() {
  return () => {};
}

/**
 * True only after the component has mounted on the client. Replaces the
 * `useEffect(() => setMounted(true), [])` + `useState` pattern, which
 * triggers React's `set-state-in-effect` lint rule and causes an extra
 * render pass. Client-only — keep this out of lib/utils.ts, since that
 * file is imported by Server Components too.
 */
export function useMounted() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}