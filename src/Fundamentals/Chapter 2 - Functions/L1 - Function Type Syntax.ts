function createMessage(name: string, a: number, b: number): string {
  return `${name} scored ${a + b}`;
}

const createMessage2 = (name: string, a: number, b: number): string => {
  return `${name} scored ${a + b}`;
};

export function calculateTotal(
  price: number,
  quantity: number,
  discount: number,
): number {
  return price * quantity * (1 - discount);
}
