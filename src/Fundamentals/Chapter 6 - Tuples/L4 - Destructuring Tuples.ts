function getName(fullName: string): [string, string] {
  const parts = fullName.split(" ");
  return [parts[0] ? parts[0] : "", parts[1] ? parts[1] : ""];
}

const [firstName, lastName] = getName("Frodo Baggins");

type UserWithAddress = [string, { city: string; country: string }];

const userData: UserWithAddress = [
  "Aragorn",
  { city: "Minas Tirith", country: "Gondor" },
];

const [userName, { city, country }] = userData;
console.log(city);
