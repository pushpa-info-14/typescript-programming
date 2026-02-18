function getCoordinatesAsObject(): { lat: number; lng: number } {
  return { lat: 40.7128, lng: -74.006 };
}

function getCoordinates(): [number, number] {
  return [40.7128, -74.006]; // latitude, longitude
}

// Coordinates have a conventional order (latitude, then longitude), so a tuple’s positional semantics fit well. '
// Objects are clearer for named access (coords.lat).

// I would probably model a User as an object:
type User = { name: string; age: number; email: string };
const user: User = { age: 60, name: "Lane", email: "super@secret.com" };

// A tuple like [string, number, string] would be confusing — user[0] for name? user[2] for email?
// Objects’ descriptive keys are more intuitive.
