type Spaceship = {
  name: string;
  speed: number;
};

const falcon = {
  name: "Millennium Falcon",
  speed: 75,
  weapons: 4,
};

function pilot(ship: Spaceship) {
  console.log(`Piloting ${ship.name} at ${ship.speed} light-years per hour`);
}

// this is fine
pilot(falcon);

// Error: Object literal may only specify known properties, and 'weapons' does not exist in type 'Spaceship'.
// pilot({ name: "Millennium Falcon", speed: 75, weapons: 4 });
