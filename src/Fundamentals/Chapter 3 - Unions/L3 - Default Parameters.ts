function newCharacter(name: string, role: string = "warrior"): string {
  return `${name} is a ${role}`;
}

console.log(newCharacter("Gandalf")); // Gandalf is a warrior
console.log(newCharacter("Gandalf", "wizard")); // Gandalf is a wizard

function countdown(start = 10): void {
  // start is a number
  console.log(`Counting down from ${start}...`);
}

export function estimateResponseTime(promptLength = 100, modelType = "text") {
  let time = 0;
  switch (modelType) {
    case "text":
      time = 2 + 0.01 * promptLength;
      break;
    case "image":
      time = 5 + 0.02 * promptLength;
      break;
    case "code":
      time = 3 + 0.05 * promptLength;
      break;
  }

  return Math.round(time);
}
