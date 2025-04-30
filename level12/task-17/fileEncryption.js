const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const algorithm = 'aes-256-cbc';
const password = 'secretpassword';
const inputFilePath = path.join(__dirname, 'sensitive.txt');
const encryptedFilePath = path.join(__dirname, 'encrypted.txt');
const decryptedFilePath = path.join(__dirname, 'decrypted.txt');

const iv = crypto.randomBytes(16);
const key = crypto.scryptSync(password, 'salt', 32);

function encrypt() {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(encryptedFilePath);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  readStream.pipe(cipher).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File encrypted successfully!');
  });

  writeStream.on('error', (err) => {
    console.error(`Error writing encrypted file: ${err.message}`);
  });
}

function decrypt() {
  const readStream = fs.createReadStream(encryptedFilePath);
  const writeStream = fs.createWriteStream(decryptedFilePath);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  readStream.pipe(decipher).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File decrypted successfully!');
    verifyDecryptedContent();
  });

  writeStream.on('error', (err) => {
    console.error(`Error writing decrypted file: ${err.message}`);
  });
}

function verifyDecryptedContent() {
  fs.readFile(inputFilePath, 'utf8', (err, originalData) => {
    if (err) {
      console.error(`Error reading original file: ${err.message}`);
      return;
    }

    fs.readFile(decryptedFilePath, 'utf8', (err, decryptedData) => {
      if (err) {
        console.error(`Error reading decrypted file: ${err.message}`);
        return;
      }

      if (originalData === decryptedData) {
        console.log('Decryption successful: original and decrypted data match!');
      } else {
        console.log('Decryption failed: data does not match.');
      }
    });
  });
}

encrypt();
setTimeout(decrypt, 1000);
