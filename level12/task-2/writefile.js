const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'output.txt');

fs.writeFile(filePath, 'Hello, Node.js!', 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully!');
});
