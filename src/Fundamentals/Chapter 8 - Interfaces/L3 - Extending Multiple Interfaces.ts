type Character = {
  name: string;
  level: number;
};

interface Magical {
  mana: number;
  castSpell(spell: string): void;
}

interface Physical {
  strength: number;
  attack(): void;
}

interface BattleMage extends Character, Magical, Physical {
  combineAttacks(): void;
}
