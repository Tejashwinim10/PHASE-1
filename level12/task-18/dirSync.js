const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'source');
const targetDir = path.join(__dirname, 'target');

function syncDir(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const sourceItems = fs.readdirSync(source);
  const targetItems = fs.readdirSync(target);

  // Copy new/updated files from source to target
  sourceItems.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      syncDir(sourcePath, targetPath);
    } else {
      if (!fs.existsSync(targetPath) || fs.statSync(sourcePath).mtimeMs > fs.statSync(targetPath).mtimeMs) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Copied: ${item}`);
      }
    }
  });

  // Delete files not present in source
  targetItems.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (!fs.existsSync(sourcePath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`Deleted: ${item}`);
    }
  });
}

syncDir(sourceDir, targetDir);
console.log('✅ Synchronization Complete');
