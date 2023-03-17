export class Matrix {
  constructor(matrixString) {
    this.rowMatrix = matrixString
      .split('\n')
      .map((row) => row.split(' ').map((val) => parseInt(val)));

    this.columnMatrix = this.rowMatrix.reduce((cols, row) => {
      row.forEach((element, idx) => {
        if (cols[idx]) {
          cols[idx].push(element);
        } else {
          cols[idx] = [element];
        }
      });

      return cols;
    }, []);
  }

  get rows() {
    return this.rowMatrix;
  }

  get columns() {
    return this.columnMatrix;
  }
}
