const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  let jsonData = JSON.parse(data);

  jsonData.push({ id: 4, name: 'New Item', value: 'Sample' });

  jsonData = jsonData.filter(item => item.id !== 2);

  jsonData[0].name = 'Updated Item';

  fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error(`Error writing file: ${err.message}`);
      return;
    }

    console.log('File updated successfully!');
  });
});
