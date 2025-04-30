const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'data.csv');
const outputFilePath = path.join(__dirname, 'processedResults.txt');

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading CSV file: ${err.message}`);
    return;
  }

  const lines = data.split('\n');
  const headers = lines[0].split(',');

  const numbers = lines.slice(1).map(line => line.split(',').map(value => parseFloat(value.trim())));

  const averages = [];
  const maxValues = [];
  const minValues = [];

  for (let i = 0; i < headers.length; i++) {
    const column = numbers.map(row => row[i]);

    const avg = column.reduce((acc, curr) => acc + curr, 0) / column.length;
    const max = Math.max(...column);
    const min = Math.min(...column);

    averages.push(avg);
    maxValues.push(max);
    minValues.push(min);
  }

  const results = [
    `Averages: ${averages.join(', ')}`,
    `Max Values: ${maxValues.join(', ')}`,
    `Min Values: ${minValues.join(', ')}`
  ];

  fs.writeFile(outputFilePath, results.join('\n'), (err) => {
    if (err) {
      console.error(`Error writing results to file: ${err.message}`);
      return;
    }

    console.log('Processed results saved successfully!');
  });
});
