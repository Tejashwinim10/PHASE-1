const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'largeFile.txt');
const destinationFile = path.join(__dirname, 'largeFileCopy.txt');

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destinationFile);

let totalBytes = 0;
let copiedBytes = 0;

fs.stat(sourceFile, (err, stats) => {
  if (err) {
    console.error(`Error getting stats for source file: ${err.message}`);
    return;
  }

  totalBytes = stats.size;
  console.log(`Starting file copy. Total size: ${totalBytes} bytes`);

  readStream.on('data', (chunk) => {
    copiedBytes += chunk.length;
    const progress = Math.round((copiedBytes / totalBytes) * 100);
    process.stdout.write(`\rProgress: ${progress}%`);
  });

  readStream.pipe(writeStream);

  readStream.on('end', () => {
    console.log('\nFile copy completed!');
  });

  readStream.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
  });

  writeStream.on('error', (err) => {
    console.error(`Error writing file: ${err.message}`);
  });
});
