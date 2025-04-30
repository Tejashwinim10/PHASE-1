const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const originalFile = path.join(__dirname, 'sample.txt');
const compressedFile = path.join(__dirname, 'sample.txt.gz');
const decompressedFile = path.join(__dirname, 'sample_decompressed.txt');

function compressFile(input, output) {
  const readStream = fs.createReadStream(input);
  const writeStream = fs.createWriteStream(output);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream).on('finish', () => {
    console.log('Compressed successfully');
    decompressFile(output, decompressedFile);
  }).on('error', err => console.error('Compression error:', err.message));
}

function decompressFile(input, output) {
  const readStream = fs.createReadStream(input);
  const writeStream = fs.createWriteStream(output);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream).on('finish', () => {
    console.log('Decompressed successfully');
    const original = fs.readFileSync(originalFile, 'utf8');
    const decompressed = fs.readFileSync(output, 'utf8');
    if (original === decompressed) {
      console.log('Verification successful: Files match');
    } else {
      console.log('Verification failed: Files do not match');
    }
  }).on('error', err => console.error('Decompression error:', err.message));
}

compressFile(originalFile, compressedFile);
