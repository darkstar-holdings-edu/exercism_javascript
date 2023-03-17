export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.unique_side_lengths = new Set(sides);
  }

  hasZeroLengthSide = () => this.unique_side_lengths.has(0);

  isTriangle() {
    const [side1, side2, side3] = [...this.sides];
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
  }

  isValidTriangle = () => !this.hasZeroLengthSide() && this.isTriangle();

  get isEquilateral() {
    return this.isValidTriangle() && this.unique_side_lengths.size === 1;
  }

  get isIsosceles() {
    return this.isValidTriangle() && this.unique_side_lengths.size <= 2;
  }

  get isScalene() {
    return this.isValidTriangle() && this.unique_side_lengths.size === 3;
  }
}
