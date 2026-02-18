// A tuple with a rest element
type NameAndScores = [string, ...number[]];

// All of these are valid
const nameAndScores1: NameAndScores = ["Alphonse", 69, 420, 300];
const nameAndScores2: NameAndScores = ["Winry", 42];
const nameAndScores3: NameAndScores = ["Edward"];

// One great use case for rest elements would be to model a command line argument pattern:
type Command = [name: string, ...args: string[]];

const gitCommit: Command = ["git", "commit", "-m", "Add new feature"];
const npmInstall: Command = ["npm", "install", "typescript"];

// Function that handles commands
function executeCommand([cmd, ...args]: Command) {
  console.log(`Executing ${cmd} with arguments: ${args.join(", ")}`);
}
