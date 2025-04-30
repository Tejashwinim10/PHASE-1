const fs = require('fs');
const path = require('path');

const watchDir = path.join(__dirname, 'watched');
const logFile = path.join(__dirname, 'change.log');

function logChange(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFile(logFile, entry, err => {
    if (err) console.error('Error writing to log:', err.message);
  });
  console.log(entry.trim());
}

function watchDirectory(dir) {
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      watchDirectory(fullPath);
    }
  });

  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (filename) {
      const message = `${eventType.toUpperCase()}: ${path.join(dir, filename)}`;
      logChange(message);
    }
  });
}

if (!fs.existsSync(watchDir)) {
  fs.mkdirSync(watchDir);
}

watchDirectory(watchDir);
console.log(`Watching directory: ${watchDir}`);
