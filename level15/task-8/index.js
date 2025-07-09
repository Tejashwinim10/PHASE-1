import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import prompt from 'prompt-sync';

dotenv.config();
const input = prompt({ sigint: true });

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const dbName = 'budgetDB';

async function addTransaction(db) {
  const amount = parseFloat(input('Enter amount: '));
  const category = input('Enter category: ');
  const type = input('Type (income/expense): ').toLowerCase();
  const date = input('Enter date (YYYY-MM-DD): ');
  const goal = input('Is this for a goal? (yes/no): ').toLowerCase();

  if (!amount || !category || !['income', 'expense'].includes(type)) {
    console.log('❌ Invalid input');
    return;
  }

  await db.collection('transactions').insertOne({
    amount,
    category,
    type,
    date: new Date(date),
    goal: goal === 'yes',
  });

  console.log('✅ Transaction added');
}

async function viewTransactions(db) {
  const transactions = await db.collection('transactions').find().toArray();
  console.log('\n📄 All Transactions:');
  transactions.forEach(t =>
    console.log(`${t.date.toISOString().split('T')[0]} | ₹${t.amount} | ${t.category} | ${t.type} | ${t.goal ? '🎯 Goal' : ''}`)
  );
}

async function filterTransactions(db) {
  const start = input('Start date (YYYY-MM-DD): ');
  const end = input('End date (YYYY-MM-DD): ');
  const category = input('Category (leave blank for all): ');

  const query = {
    date: {
      $gte: new Date(start),
      $lte: new Date(end),
    },
  };

  if (category) query.category = category;

  const filtered = await db.collection('transactions').find(query).toArray();

  if (filtered.length === 0) {
    console.log('ℹ️ No transactions found.');
    return;
  }

  console.log('\n🔍 Filtered Transactions:');
  filtered.forEach(t =>
    console.log(`${t.date.toISOString().split('T')[0]} | ₹${t.amount} | ${t.category} | ${t.type} | ${t.goal ? '🎯 Goal' : ''}`)
  );
}

async function showSummary(db) {
  const transactions = await db.collection('transactions').find().toArray();

  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense;

  const goalProgress = transactions
    .filter(t => t.goal)
    .reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);

  console.log('\n📊 Summary:');
  console.log(`💰 Total Income: ₹${income.toFixed(2)}`);
  console.log(`💸 Total Expenses: ₹${expense.toFixed(2)}`);
  console.log(`🧾 Balance: ₹${balance.toFixed(2)}`);
  console.log(`🎯 Goal Progress: ₹${goalProgress.toFixed(2)}`);
}

async function main() {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log('✅ Connected to MongoDB');

    while (true) {
      console.log('\n💼 Budget Tracker');
      console.log('1. Add Transaction');
      console.log('2. View Transactions');
      console.log('3. Filter by Date or Category');
      console.log('4. Summary Report');
      console.log('0. Exit');

      const choice = input('Choose an option: ');

      switch (choice) {
        case '1':
          await addTransaction(db);
          break;
        case '2':
          await viewTransactions(db);
          break;
        case '3':
          await filterTransactions(db);
          break;
        case '4':
          await showSummary(db);
          break;
        case '0':
          console.log('👋 Exiting...');
          await client.close();
          return;
        default:
          console.log('❌ Invalid choice');
      }
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();
