function logSaiyan(saiyan: { name: string; power: number }) {
  console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
  // ...
}

type Saiyan = {
  name: string;
  power: number;
};

function logSaiyan2(saiyan: Saiyan) {
  console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
  // ...
}
