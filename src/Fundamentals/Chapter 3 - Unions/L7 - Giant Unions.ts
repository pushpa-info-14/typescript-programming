type Distance = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Class =
  | "Warrior"
  | "Rogue"
  | "Mage"
  | "Cleric"
  | "Paladin"
  | "Druid"
  | "Hunter"
  | "Shaman";

// type MoveMessage = `The ${Class} moves ${Distance}, ${Distance}, ${Distance}, ${Distance}, then ${Distance} spaces.`;
// const message: MoveMessage = "The Warrior moves 6, 2, 5, 4, then 7 spaces.";

// There's a good chance you'll run into an error like this: Error: Expression produces a union type that is too complex to represent.
// Creating hyper-specific union types can have a negative impact on editor responsiveness, compilation speed, and overall performance.
