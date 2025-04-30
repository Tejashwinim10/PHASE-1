const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  console.log(`File Size: ${stats.size} bytes`);
  console.log(`Created At: ${stats.birthtime.toLocaleString()}`);
  console.log(`Last Modified: ${stats.mtime.toLocaleString()}`);
});
