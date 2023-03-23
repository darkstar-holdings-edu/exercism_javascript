const { floor, random } = Math;

export const abilityModifier = (n) => {
  if (n < 3) {
    throw new Error('Ability scores must be at least 3');
  }

  if (n > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return floor((n - 10) / 2);
};

const generateRandomNumber = (min, max) => parseInt(random() * (max - min) + min);

const ROLLABLE_CHARACTER_ATTRIBUTES = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
];

export class Character {
  constructor() {
    this._hitpoints = 10;

    for (let key of ROLLABLE_CHARACTER_ATTRIBUTES) {
      this[key] = Character.rollAbility();
    }
  }

  static rollAbility() {
    const rolls = Array.from({ length: 4 }, () => generateRandomNumber(1, 6));
    const highestRolls = rolls.sort().splice(1);
    return highestRolls.reduce((sum, roll) => sum + roll, 0);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints + abilityModifier(this.constitution);
  }
}
