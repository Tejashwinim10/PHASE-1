const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'new_folder');

fs.access(dirPath, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(dirPath, (err) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        return;
      }
      console.log('Directory created successfully: new_folder');
    });
  } else {
    console.log('Directory already exists: new_folder');
  }
});
