export class Series {
  constructor(series) {
    if (series.length === 0) throw new Error('series cannot be empty');
    this.values = [...series];
  }

  slices(sliceLength) {
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (sliceLength > this.values.length)
      throw new Error('slice length cannot be greater than series length');
    if (sliceLength === 0) throw new Error('slice length cannot be zero');

    return Array.from({ length: this.values.length - sliceLength + 1 }, (_, i) =>
      this.values.slice(i, i + sliceLength).map(Number)
    );
  }
}
