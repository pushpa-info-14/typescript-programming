/**
 With dynamic property keys we've only used the string type so far, and most of the time, that's all you need. 
 However, JavaScript also supports number and symbols as property keys. TypeScript actually has a built-in type 
 called PropertyKey that represents all possible property key types:
 */

// this is a built-in type
type PropertyKey = string | number | symbol;

type InfrastructureTags = {
  [key: string]: any;
};

type InfrastructureTags2 = {
  [key: PropertyKey]: any;
};

const janesServer: InfrastructureTags2 = {
  name: "Jane's Server",
  1: 420,
  [Symbol("role")]: "Admin",
};

// To read or write a symbol-keyed property, use the symbol itself with bracket notation. Dot notation won't work.
const ROLE = Symbol("role");
const user = { [ROLE]: "Admin" };
user[ROLE]; // "Admin"
// user.ROLE; // undefined
