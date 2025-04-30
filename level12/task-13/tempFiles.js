const fs = require('fs');
const path = require('path');

fs.mkdtemp(path.join(__dirname, 'temp-'), (err, tempDir) => {
  if (err) {
    console.error(`Error creating temp directory: ${err.message}`);
    return;
  }

  console.log(`Temporary directory created: ${tempDir}`);

  const files = ['file1.txt', 'file2.txt', 'file3.txt'];

  files.forEach((file, index) => {
    const filePath = path.join(tempDir, file);
    const data = `This is file number ${index + 1}`;

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(`Error writing to file ${filePath}: ${err.message}`);
        return;
      }

      console.log(`File created: ${filePath}`);
    });
  });
});
