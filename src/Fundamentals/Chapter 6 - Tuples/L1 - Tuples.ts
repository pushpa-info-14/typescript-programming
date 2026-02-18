// Be explicit with tuples.
// You need to provide explicit typing with tuples! This is a tuple:

// [string, number]
const nameAndAge: [string, number] = ["John Jones", 104];

// But if we remove the type, it's inferred as an array of string | number:
// (string | number)[]
const nameAndAge2 = ["Martha Jones", 24];

// With a (string | number)[] you can do this:
const nameAndAge3 = ["Martha Jones", 24];
nameAndAge3[1] = "Donna Noble";

// But with a tuple, TypeScript will provide an error (which is probably what you want).
// So, always explicitly type your tuples!

const nameAndAge4: [string, number] = ["Martha Jones", 24];
// Error: Type 'string' is not assignable to type 'number'.
// nameAndAge4[1] = "Donna Noble";
