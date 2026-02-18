type Superhero = {
  name: string;
  strength: number;
  cape?: boolean; // cape is optional
};

function fight(superhero: Superhero) {
  if (!superhero.cape) {
    // contact edna mode
  }
  // do the happy path thing
}
