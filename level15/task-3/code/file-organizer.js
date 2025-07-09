// file-organizer.js

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Promisified fs functions
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const rename = promisify(fs.rename);

const categories = {
  images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
  documents: ['.pdf', '.doc', '.docx', '.txt', '.xlsx', '.pptx'],
  videos: ['.mp4', '.avi', '.mkv', '.mov'],
  music: ['.mp3', '.wav', '.aac'],
  archives: ['.zip', '.rar', '.7z', '.tar', '.gz'],
  code: ['.js', '.py', '.java', '.cpp', '.html', '.css'],
  others: []
};

function getCategory(ext) {
  ext = ext.toLowerCase();
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) return category;
  }
  return 'others';
}

function generateReport(movedFiles) {
  console.log('\n📄 Move Report:');
  movedFiles.forEach(({ file, to }) => {
    console.log(`✅ Moved: ${file} → ${to}`);
  });
}

async function organizeFilesAsync(dir) {
  const movedFiles = [];
  const files = await readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const fileStat = await stat(fullPath);
    if (fileStat.isDirectory()) continue;

    const ext = path.extname(file);
    const category = getCategory(ext);
    const categoryDir = path.join(dir, category);

    if (!fs.existsSync(categoryDir)) await mkdir(categoryDir);

    const newLocation = path.join(categoryDir, file);
    await rename(fullPath, newLocation);
    movedFiles.push({ file, to: category });
  }

  generateReport(movedFiles);
}

function organizeFilesSync(dir) {
  const movedFiles = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const fileStat = fs.statSync(fullPath);
    if (fileStat.isDirectory()) continue;

    const ext = path.extname(file);
    const category = getCategory(ext);
    const categoryDir = path.join(dir, category);

    if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir);

    const newLocation = path.join(categoryDir, file);
    fs.renameSync(fullPath, newLocation);
    movedFiles.push({ file, to: category });
  }

  generateReport(movedFiles);
}

function watchDirectory(dir) {
  console.log(`👀 Watching for new files in ${dir}...`);
  fs.watch(dir, async (eventType, filename) => {
    if (!filename || eventType !== 'rename') return;
    const fullPath = path.join(dir, filename);
    if (!fs.existsSync(fullPath)) return;

    const fileStat = await stat(fullPath);
    if (fileStat.isDirectory()) return;

    const ext = path.extname(filename);
    const category = getCategory(ext);
    const categoryDir = path.join(dir, category);

    if (!fs.existsSync(categoryDir)) await mkdir(categoryDir);
    const newLocation = path.join(categoryDir, filename);
    await rename(fullPath, newLocation);

    console.log(`📥 New file moved: ${filename} → ${category}`);
  });
}

// CLI Handler
const dir = process.argv[2] || process.cwd();
const mode = process.argv[3] || 'async';

if (!fs.existsSync(dir)) {
  console.error('❌ Directory does not exist.');
  process.exit(1);
}

if (mode === 'sync') {
  organizeFilesSync(dir);
} else if (mode === 'async') {
  organizeFilesAsync(dir);
} else if (mode === 'watch') {
  watchDirectory(dir);
} else {
  console.error('❌ Unknown mode. Use "sync", "async", or "watch".');
}
