let newUser = {};
// Property 'name' does not exist on type '{}'
// newUser.name = "Lane";

let newUser2 = {};
newUser2 = "Lane";

type User = {
  name: string;
};

let newUser3: User = {
  name: "Lane",
};
