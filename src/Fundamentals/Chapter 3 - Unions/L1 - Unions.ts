// userId is a string OR a number
let userId: string | number;
userId = "user_42";
userId = 42;

function safeSquare(val: string | number): number {
  if (typeof val === "string") {
    val = parseInt(val, 10);
  }
  // now val is only a number
  return val * val;
}

let result = safeSquare("5");
console.log(result);
// 25

result = safeSquare(5);
console.log(result);
// 25

export function getTicketInfo(id: string | number) {
  if (typeof id == "string") {
    return `Processing ticket: ${id.split("-")[1]}`;
  }
  return `Processing ticket: ${id}`;
}
