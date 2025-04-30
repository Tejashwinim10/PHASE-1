const fs = require('fs');
const path = require('path');

const oldFilePath = path.join(__dirname, 'original.txt');
const newFilePath = path.join(__dirname, 'renamed.txt');

fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  console.log('File renamed successfully to renamed.txt');
});
