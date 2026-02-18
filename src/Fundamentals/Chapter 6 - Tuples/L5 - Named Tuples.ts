type UserData = [string, number, boolean];
type UserDataLabeled = [name: string, age: number, isAdmin: boolean];

// Your editor shows the full type:
// [name: string, age: number, isAdmin: boolean]
function getUser(): UserDataLabeled {
  return ["Frodo", 33, false];
}

// Labels are just documentation
const user: [name: string, age: number] = ["Bilbo", 111];
const [age, name] = user;
console.log(age); // "Bilbo"
console.log(name); // 111
