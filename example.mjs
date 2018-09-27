import { PlainChart } from ".";

//
// simple bar chart
//
const chart = new PlainChart([1, 2, 3, 4, 5, 10, 7, 8, 0, 1, 4, 3], 10);
console.log(chart.render());

//
// sine wave
//
const values = range(0, 4 * Math.PI, 100).map(x => Math.sin(x) + 1.2);
const chart2 = new PlainChart(values, 10, PlainChart.scatter);
console.log(chart2.render());

function range(start, end, count) {
  const step = (end - start) / count;
  const values = [];
  for (let i = 0; i < count; i++) {
    values.push(start + i * step);
  }
  return values;
}
