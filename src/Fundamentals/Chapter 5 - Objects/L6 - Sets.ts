// A Set that contains only strings
const justiceLeague = new Set<string>();

justiceLeague.add("Green Arrow");
justiceLeague.add("Flash");

// Error: Argument of type '2' is not assignable to parameter of type 'string'
// justiceLeague.add(2);

// A Set automatically removes duplicate values from an array
const names = ["plastic-man", "firestorm", "plastic-man"];
const justiceLeague2 = new Set<string>(names);

console.log(justiceLeague2);
// Set { 'plastic-man', 'firestorm' }

/** 
delete()
has()
forEach()
size
*/

const justiceLeague3 = new Set<string>(["Atom", "Black Canary", "Blue Beetle"]);

console.log(justiceLeague3.size); // 3

justiceLeague3.delete("Blue Beetle");
console.log(justiceLeague3.has("Blue Beetle")); // false

justiceLeague3.forEach((member) => console.log(member));
// Atom
// Black Canary
