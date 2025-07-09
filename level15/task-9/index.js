
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import promptSync from 'prompt-sync';

const input = promptSync({ sigint: true });
const notesDir = path.resolve('notes');


async function ensureNotesDir() {
  try {
    await fs.mkdir(notesDir, { recursive: true });
  } catch (err) {
    console.error('❌ Failed to create notes directory:', err.message);
  }
}


async function createNote() {
  const category = input('📁 Enter category: ');
  const title = input('📝 Enter title: ');
  const content = input('🖊️  Enter content (Markdown supported): ');

  const categoryDir = path.join(notesDir, category);
  const notePath = path.join(categoryDir, `${title}.md`);

  try {
    await fs.mkdir(categoryDir, { recursive: true });
    await fs.writeFile(notePath, content);
    console.log('✅ Note created successfully!');
  } catch (err) {
    console.error('❌ Error creating note:', err.message);
  }
}

async function listNotes() {
  try {
    const categories = await fs.readdir(notesDir);
    for (const category of categories) {
      console.log(`📁 Category: ${category}`);
      const files = await fs.readdir(path.join(notesDir, category));
      files.forEach(file => console.log(`  📝 ${file}`));
    }
  } catch (err) {
    console.error('❌ Error listing notes:', err.message);
  }
}


async function viewNote() {
  const category = input('📁 Enter category: ');
  const title = input('📝 Enter title: ');
  const notePath = path.join(notesDir, category, `${title}.md`);

  try {
    const content = await fs.readFile(notePath, 'utf-8');
    const rendered = marked(content);
    console.log('\n🖥️  Rendered Markdown:\n');
    console.log(rendered);
  } catch (err) {
    console.error('❌ Error reading note:', err.message);
  }
}


async function editNote() {
  const category = input('📁 Enter category: ');
  const title = input('📝 Enter title: ');
  const notePath = path.join(notesDir, category, `${title}.md`);

  try {
    const oldContent = await fs.readFile(notePath, 'utf-8');
    console.log('\n✏️ Current content:\n' + oldContent);
    const newContent = input('\n🖊️  Enter new content: ');
    await fs.writeFile(notePath, newContent);
    console.log('✅ Note updated.');
  } catch (err) {
    console.error('❌ Error editing note:', err.message);
  }
}


async function deleteNote() {
  const category = input('📁 Enter category: ');
  const title = input('📝 Enter title: ');
  const notePath = path.join(notesDir, category, `${title}.md`);

  try {
    await fs.unlink(notePath);
    console.log('🗑️  Note deleted.');
  } catch (err) {
    console.error('❌ Error deleting note:', err.message);
  }
}


async function searchNotes() {
  const keyword = input('🔍 Enter keyword to search: ').toLowerCase();

  try {
    const categories = await fs.readdir(notesDir);
    for (const category of categories) {
      const files = await fs.readdir(path.join(notesDir, category));
      for (const file of files) {
        const filePath = path.join(notesDir, category, file);
        const content = await fs.readFile(filePath, 'utf-8');
        if (content.toLowerCase().includes(keyword)) {
          console.log(`✅ Found in: ${category}/${file}`);
        }
      }
    }
  } catch (err) {
    console.error('❌ Error searching notes:', err.message);
  }
}


async function main() {
  await ensureNotesDir();

  while (true) {
    console.log('\n--- 📒 Markdown Notes App ---');
    console.log('1️⃣ Create Note');
    console.log('2️⃣ List Notes');
    console.log('3️⃣ View Note');
    console.log('4️⃣ Edit Note');
    console.log('5️⃣ Delete Note');
    console.log('6️⃣ Search Notes');
    console.log('0️⃣ Exit');

    const choice = input('👉 Choose an option: ');

    switch (choice) {
      case '1':
        await createNote();
        break;
      case '2':
        await listNotes();
        break;
      case '3':
        await viewNote();
        break;
      case '4':
        await editNote();
        break;
      case '5':
        await deleteNote();
        break;
      case '6':
        await searchNotes();
        break;
      case '0':
        console.log('👋 Goodbye!');
        process.exit(0);
      default:
        console.log('❗ Invalid option, try again.');
    }
  }
}

main();
