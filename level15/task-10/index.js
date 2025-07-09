import fs from 'fs/promises';
import fssync from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import promptSync from 'prompt-sync';
import archiver from 'archiver';
import schedule from 'node-schedule';

const input = promptSync({ sigint: true });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFile = path.join(__dirname, 'backup.log');

async function log(message) {
  const time = new Date().toISOString();
  await fs.appendFile(logFile, `[${time}] ${message}${os.EOL}`);
}

function getTimestamp() {
  const d = new Date();
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}_${d.getHours().toString().padStart(2, '0')}-${d.getMinutes().toString().padStart(2, '0')}-${d.getSeconds().toString().padStart(2, '0')}`;
}

async function copyDirectory(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const items = await fs.readdir(src, { withFileTypes: true });
  for (const item of items) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);
    if (item.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function compressDirectory(sourceDir, zipPath) {
  return new Promise((resolve, reject) => {
    const output = fssync.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    output.on('close', resolve);
    archive.on('error', reject);
    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
}

async function cleanupBackups(destDir, maxBackups) {
  const entries = await fs.readdir(destDir);
  const backups = entries.filter(name => name.endsWith('.zip')).sort();
  if (backups.length > maxBackups) {
    const toDelete = backups.slice(0, backups.length - maxBackups);
    for (const file of toDelete) {
      await fs.unlink(path.join(destDir, file));
      await log(`Deleted old backup: ${file}`);
    }
  }
}

async function performBackup(sourceDir, destDir, maxBackups) {
  try {
    const timestamp = getTimestamp();
    const tempDir = path.join(destDir, `temp-${timestamp}`);
    const zipPath = path.join(destDir, `backup-${timestamp}.zip`);
    await copyDirectory(sourceDir, tempDir);
    await compressDirectory(tempDir, zipPath);
    await fs.rm(tempDir, { recursive: true, force: true });
    await cleanupBackups(destDir, maxBackups);
    await log(`Backup successful: ${zipPath}`);
    console.log(`✅ Backup created at: ${zipPath}`);
  } catch (err) {
    console.error('❌ Backup failed:', err.message);
    await log(`Backup failed: ${err.message}`);
  }
}

async function main() {
  const source = input('📁 Enter source directory: ').trim();
  const destination = input('📦 Enter backup destination: ').trim();
  const max = parseInt(input('🔢 Max number of backups to keep: ').trim(), 10);
  const type = input('⏱️  One-time or Scheduled? (once/cron): ').trim();

  if (!fssync.existsSync(source)) {
    console.error('❌ Source directory does not exist.');
    return;
  }

  await fs.mkdir(destination, { recursive: true });

  if (type === 'once') {
    await performBackup(source, destination, max);
  } else if (type === 'cron') {
    const cronExpr = input('🕒 Enter CRON expression (e.g. */5 * * * *): ');
    schedule.scheduleJob(cronExpr, async () => {
      console.log('\n⏳ Scheduled backup triggered...');
      await performBackup(source, destination, max);
    });
    console.log('📅 Scheduled backup started. Press Ctrl+C to stop.');
  } else {
    console.log('❗ Invalid type.');
  }
}

main();
