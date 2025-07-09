const fs = require('fs/promises');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'tasks.json');

const loadTasks = async () => {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
};

const saveTasks = async (tasks) => {
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

const addTask = async (title, description, status = 'pending', dueDate = null) => {
  const tasks = await loadTasks();
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status,
    dueDate,
  };
  tasks.push(newTask);
  await saveTasks(tasks);
  console.log(`✅ Task added: ${title}`);
};

const listTasks = async (filterStatus = null) => {
  const tasks = await loadTasks();
  let filtered = tasks;

  if (filterStatus) {
    filtered = tasks.filter(task => task.status === filterStatus);
  }

  filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  if (filtered.length === 0) {
    console.log('⚠️ No tasks found.');
    return;
  }

  filtered.forEach(task => {
    console.log(`\n🆔 ${task.id}\n📌 ${task.title}\n📝 ${task.description}\n📅 Due: ${task.dueDate || 'N/A'}\n🔖 Status: ${task.status}`);
  });
};

const updateTask = async (id, field, newValue) => {
  const tasks = await loadTasks();
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index === -1) return console.log('❌ Task not found');

  if (!['title', 'description', 'status', 'dueDate'].includes(field)) {
    return console.log('❌ Invalid field. Use: title, description, status, dueDate');
  }

  tasks[index][field] = newValue;
  await saveTasks(tasks);
  console.log(`✅ Task ${id} updated`);
};

const deleteTask = async (id) => {
  let tasks = await loadTasks();
  const newTasks = tasks.filter(task => task.id !== parseInt(id));
  if (newTasks.length === tasks.length) {
    return console.log('❌ Task not found');
  }

  newTasks.forEach((task, i) => task.id = i + 1);
  await saveTasks(newTasks);
  console.log(`🗑️ Task ${id} deleted`);
};

const main = async () => {
  const [,, command, ...args] = process.argv;

  try {
    switch (command) {
      case 'add':
        await addTask(args[0], args[1], args[2], args[3]);
        break;
      case 'list':
        await listTasks(args[0]);
        break;
      case 'update':
        await updateTask(args[0], args[1], args[2]);
        break;
      case 'delete':
        await deleteTask(args[0]);
        break;
      default:
        console.log('Usage:\n  node index.js add "title" "desc" [status] [dueDate]\n  node index.js list [status]\n  node index.js update <id> <field> <value>\n  node index.js delete <id>');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

main();
