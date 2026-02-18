let inventory = [];
// inventory: any[]

inventory.push(42);
// inventory: number[]

inventory.push("robe");
// inventory: (number | string)[]

let inventory2: number[] = [];
// inventory2.push("robe");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'

function getConfig() {
  let config = [];
  // config: any[]
  config.push("api-key");
  // config: string[]
  config.push(8080);
  // config: (string | number)[]
  return config;
}

let config = getConfig();
// config: (string | number)[]

// config.push(false);
// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
