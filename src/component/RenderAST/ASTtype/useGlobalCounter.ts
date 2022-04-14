import { useState } from "react";

export let global_counter = 1;

export function resetGlobal(n:number){
  global_counter= n
}

export function useGlobalCounter() {
  const [count] = useState(() => global_counter++);

  return count;
}

