const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

if (fs.existsSync(filePath)) {
    console.log('test.txt exists.');
} else {
    console.log('test.txt does not exist.');
}
