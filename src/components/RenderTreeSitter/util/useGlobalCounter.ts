let _globalCounter: number = 1

export function resetGlobal(n: number) {
  _globalCounter = n
}

export function globalCounter() {
  const count =  _globalCounter++

  return count
}
