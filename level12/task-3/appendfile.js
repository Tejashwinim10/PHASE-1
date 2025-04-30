const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');

fs.appendFile(filePath, 'More content here.\n', 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended successfully!');
});
