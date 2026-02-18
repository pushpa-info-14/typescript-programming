// A Map with string keys and number values
const podRacerSpeeds = new Map<string, number>();

podRacerSpeeds.set("Anakin Skywalker", 947);
podRacerSpeeds.set("Sebulba", 941);

// podRacerSpeeds.set("R2-D2", true);
// Error: Argument of type 'true' is not assignable to parameter of type 'number'

// podRacerSpeeds.set(420, 69);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log(podRacerSpeeds.size);
// 2

for (const [racer, speed] of podRacerSpeeds) {
  console.log(`${racer} raced at ${speed} speed`);
}
// Anakin raced at 947 speed
// Sebulba raced at 941 speed

console.log(podRacerSpeeds.get("Sebulba"));
// 941

console.log(podRacerSpeeds.has("Sebulba"));
// true

podRacerSpeeds.delete("Sebulba");
console.log(podRacerSpeeds.get("Sebulba"));
// undefined
