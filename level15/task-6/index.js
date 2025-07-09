import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import prompt from 'prompt-sync';

const input = prompt({ sigint: true });

const algorithm = 'aes-256-cbc';
const iv = crypto.randomBytes(16);

function getKeyFromPassword(password) {
  return crypto.scryptSync(password, 'salt', 32);
}


function encryptFile(filePath, password) {
  const key = getKeyFromPassword(password);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const inputFile = fs.createReadStream(filePath);
  const outputFile = fs.createWriteStream(`${filePath}.enc`);

  outputFile.write(iv);

  inputFile.pipe(cipher).pipe(outputFile);

  outputFile.on('finish', () => {
    console.log(`🔐 File encrypted: ${filePath}.enc`);
  });
}


function decryptFile(filePath, password) {
  const readStream = fs.createReadStream(filePath);
  const ivBuffer = Buffer.alloc(16);
  let offset = 0;

  readStream.once('readable', () => {
    const chunk = readStream.read(16);
    if (!chunk) {
      console.error('❌ Failed to read IV');
      return;
    }

    chunk.copy(ivBuffer, 0, 0, 16);
    const key = getKeyFromPassword(password);
    const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);

    const outputFile = fs.createWriteStream(filePath.replace('.enc', '.dec'));
    readStream.pipe(decipher).pipe(outputFile);

    outputFile.on('finish', () => {
      console.log(`🔓 File decrypted: ${filePath.replace('.enc', '.dec')}`);
    });
  });
}

function encryptDirectory(dirPath, password) {
  fs.readdirSync(dirPath).forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.lstatSync(fullPath).isFile()) {
      encryptFile(fullPath, password);
    }
  });
}

function decryptDirectory(dirPath, password) {
  fs.readdirSync(dirPath).forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fullPath.endsWith('.enc') && fs.lstatSync(fullPath).isFile()) {
      decryptFile(fullPath, password);
    }
  });
}


function main() {
  console.log('\n🔐 File Encryption Tool');
  console.log('1. Encrypt File');
  console.log('2. Decrypt File');
  console.log('3. Encrypt Directory');
  console.log('4. Decrypt Directory');
  console.log('0. Exit');

  const choice = input('Enter your choice: ');

  switch (choice) {
    case '1': {
      const file = input('Enter file path to encrypt: ');
      const password = input('Enter password: ');
      encryptFile(file, password);
      break;
    }
    case '2': {
      const file = input('Enter file path to decrypt (.enc): ');
      const password = input('Enter password: ');
      decryptFile(file, password);
      break;
    }
    case '3': {
      const dir = input('Enter directory path to encrypt: ');
      const password = input('Enter password: ');
      encryptDirectory(dir, password);
      break;
    }
    case '4': {
      const dir = input('Enter directory path to decrypt: ');
      const password = input('Enter password: ');
      decryptDirectory(dir, password);
      break;
    }
    case '0':
      console.log('👋 Exiting...');
      process.exit();
    default:
      console.log('❌ Invalid choice');
  }
}

main();
