import { useState } from "react";

export let global_counter: number = 1;

export function resetGlobal(n: number): void {
  global_counter = n;
}

export function useGlobalCounter(): number {
  const [count] = useState(() => global_counter++);

  return count;
}
