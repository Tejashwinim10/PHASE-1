import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import prompt from 'prompt-sync';

dotenv.config();
const input = prompt();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(dbName);
    const contacts = db.collection('contacts');

    while (true) {
      console.log(`
📘 Contact Book
1. Add Contact
2. List All Contacts
3. Search Contact
4. Update Contact
5. Delete Contact
6. Filter by Group
0. Exit
      `);

      const choice = input('Enter choice: ');

      switch (choice) {
        case '1': {
          const name = input('Name: ');
          const email = input('Email: ');
          const phone = input('Phone: ');
          const address = input('Address: ');
          const group = input('Group (e.g., Friends, Work): ');

          if (!name || !email || !phone) {
            console.log('❌ Name, email, and phone are required.');
            break;
          }

          await contacts.insertOne({ name, email, phone, address, group });
          console.log('✅ Contact added.');
          break;
        }

        case '2': {
          const all = await contacts.find().toArray();
          console.table(all);
          break;
        }

        case '3': {
          const query = input('Search by name/email/phone: ');
          const result = await contacts.find({
            $or: [
              { name: new RegExp(query, 'i') },
              { email: new RegExp(query, 'i') },
              { phone: new RegExp(query, 'i') },
            ],
          }).toArray();

          console.table(result);
          break;
        }

        case '4': {
          const name = input('Enter name to update: ');
          const existing = await contacts.findOne({ name });

          if (!existing) {
            console.log('❌ Contact not found.');
            break;
          }

          const email = input(`New Email (${existing.email}): `) || existing.email;
          const phone = input(`New Phone (${existing.phone}): `) || existing.phone;
          const address = input(`New Address (${existing.address}): `) || existing.address;
          const group = input(`New Group (${existing.group || 'None'}): `) || existing.group;

          await contacts.updateOne(
            { name },
            { $set: { email, phone, address, group } }
          );
          console.log('✅ Contact updated.');
          break;
        }

        case '5': {
          const name = input('Enter name to delete: ');
          const res = await contacts.deleteOne({ name });
          if (res.deletedCount > 0) {
            console.log('🗑️ Contact deleted.');
          } else {
            console.log('❌ Contact not found.');
          }
          break;
        }

        case '6': {
          const group = input('Enter group name to filter: ');
          const filtered = await contacts.find({ group }).toArray();
          console.table(filtered);
          break;
        }

        case '0':
          console.log('👋 Exiting...');
          return;

        default:
          console.log('❗ Invalid choice.');
      }
    }

  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

main();
