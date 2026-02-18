function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet("Gandalf"); // "Hello, Gandalf!"
greet("Gandalf", "Wizard"); // "Hello, Wizard Gandalf!"

export function calculateApiCost(numRequests: number, tier?: string) {
  let cost = 0.1;
  if (tier === "pro") {
    cost = 0.05;
  } else if (tier === "enterprise") {
    cost = 0.03;
  }
  return cost * numRequests;
}
