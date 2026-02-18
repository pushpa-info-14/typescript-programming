// TypeScript infers the type as (string | number)[]
let lightsaberStyles = [1, 2, "double", "shoto"];

function describe(style: string | number) {
  console.log(`Wield ${style} lightsaber`);
}

lightsaberStyles.forEach(describe);
// Wield 1 lightsaber
// Wield 2 lightsaber
// Wield double lightsaber
// Wield shoto lightsaber
