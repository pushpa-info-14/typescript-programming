const nameAndAge: [string, number] = ["Martha Jones", 24];
nameAndAge.push("Donna Noble");

const nameAndAge2: readonly [string, number] = ["Martha Jones", 24];
// Error: Property 'push' does not exist on type 'readonly [string, number]'.
// nameAndAge2.push("Donna Noble");
