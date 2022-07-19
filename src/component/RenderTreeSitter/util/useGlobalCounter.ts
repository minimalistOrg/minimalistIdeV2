
export let global_counter: number = 1;

export function resetGlobal(n: number): void {
  global_counter = n;
  // console.log("here")
}

export function GlobalCounter(): number {
  const count =  global_counter++

  return count;
}
