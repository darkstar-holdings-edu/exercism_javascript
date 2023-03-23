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

const rollDie = (min, max) => parseInt(random() * (max - min) + min);

export class Character {
  static ATTRIBUTES = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma',
  ];

  static BASE_HITPOINTS = 10;

  static rollAbility() {
    const rolls = Array.from({ length: 4 }, () => rollDie(1, 6));
    const highestRolls = rolls.sort().splice(1);
    return highestRolls.reduce((sum, roll) => sum + roll, 0);
  }

  constructor() {
    this._hitpoints = Character.BASE_HITPOINTS;

    for (let key of Character.ATTRIBUTES) {
      this[key] = Character.rollAbility();
    }

    this.hitpoints = Character.BASE_HITPOINTS + abilityModifier(this.constitution);
  }
}
