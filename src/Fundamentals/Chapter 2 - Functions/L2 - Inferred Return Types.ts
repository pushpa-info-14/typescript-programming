const myPowerLevel: number = 9000;
const myPowerLevel2 = 9000;

function divide(a: number, b: number): number {
  return a / b;
}
function divide2(a: number, b: number) {
  return a / b;
}

export function combinePrompts(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n${userPrompt}`;
}
