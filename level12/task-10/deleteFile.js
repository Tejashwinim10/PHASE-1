const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fileToDelete.txt');

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('File does not exist.');
    return;
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }

    console.log('File deleted successfully!');
  });
});
