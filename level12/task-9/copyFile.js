const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'source.txt');
const destinationFile = path.join(__dirname, 'destination.txt');

fs.access(destinationFile, fs.constants.F_OK, (err) => {
  if (!err) {
    console.log('Destination file already exists.');
    return;
  }

  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }

    console.log('File copied successfully!');
  });
});
