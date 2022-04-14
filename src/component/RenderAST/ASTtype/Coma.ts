export function Coma(actual: number, lengthArray: number): string {
  if (lengthArray - 1 === actual) {
    return "";
  } else {
    return " , ";
  }
}
