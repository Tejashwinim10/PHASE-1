const fs = require('fs');
const path = require('path');

function readDirRecursive(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);

      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for ${fullPath}: ${err.message}`);
          return;
        }

        if (stats.isDirectory()) {
          console.log(`Directory: ${fullPath}`);
          readDirRecursive(fullPath);
        } else {
          console.log(`File: ${fullPath}`);
        }
      });
    });
  });
}

const rootDir = path.join(__dirname, 'testDirectory');
readDirRecursive(rootDir);
