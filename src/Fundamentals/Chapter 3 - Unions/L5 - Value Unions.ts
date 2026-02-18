function move(direction: "north") {
  // Implementation...
}
function move2(direction: "north" | "south" | "east" | "west") {
  // Implementation...
}
type Direction = "north" | "south" | "east" | "west";

function move3(direction: Direction) {
  // Implementation...
}

export type Priority = "low" | "medium" | "high" | "critical";

export function setPriority(level: Priority) {
  switch (level) {
    case "low":
      return 0;
    case "medium":
      return 1;
    case "high":
      return 2;
    case "critical":
      return 3;
    default:
      return 0;
  }
}
