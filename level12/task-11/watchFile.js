const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'monitor.txt');

fs.watch(filePath, (eventType, filename) => {
  if (filename) {
    console.log(`File ${filename} was modified. Event type: ${eventType}`);
  } else {
    console.log('Filename not provided');
  }
});
