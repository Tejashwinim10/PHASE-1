const fs = require('fs');
const path = require('path');

const dirPath = __dirname;

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      console.log(`${file} [Directory]`);
    } else {
      console.log(`${file} [File]`);
    }
  });
});
