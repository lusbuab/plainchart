export class PlainChart {
  constructor(values, height = 10, style) {
    if (height <= 0) {
      throw new Error("height must be above zero");
    }

    this.values = values;
    this.height = height;
    this.max = Math.max(...values);

    const columns = [];
    values.forEach(value => {
      const cells = [];
      for (let y = 1; y < this.height + 1; y += 1) {
        cells.push(
          style ? style(this, value, y) : PlainChart.bar(this, value, y)
        );
      }
      columns.push(cells);
    });

    this.rows = [];
    for (let i = 0; i < this.height; i += 1) {
      this.rows.push(columns.map(c => c[i]));
    }
    this.rows = this.rows.reverse();
  }

  y(value) {
    const _y = this.max != 0 ? Math.round((value * this.height) / this.max) : 0;
    return _y <= this.height ? _y : this.height;
  }

  static bar(chart, value, y) {
    return y <= chart.y(value) ? "▌" : " ";
  }

  static scatter(chart, value, y) {
    return y == chart.y(value) ? "×" : " ";
  }

  render(newLine = "\n") {
    return this.rows.map(r => r.join("")).join(newLine);
  }
}
