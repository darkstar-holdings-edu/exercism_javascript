export class Squares {
  constructor(limit) {
    this.limit = limit;
  }

  get sumOfSquares() {
    return (this.limit * (this.limit + 1) * (2 * this.limit + 1)) / 6;
  }

  get squareOfSum() {
    return ((this.limit * (this.limit + 1)) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
