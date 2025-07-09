const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 7000;
app.get('/', (req, res) => {
  res.send('Hello from the Journal API!');
});


app.use(bodyParser.json());

const uri = 'mongodb://localhost:27017';
const dbName = 'personalJournal';
let db;

MongoClient.connect(uri)
  .then((client) => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch((error) => console.error(error));

app.post('/entries', async (req, res) => {
  try {
    const { title, content, tags = [], date = new Date() } = req.body;
    const journalEntry = { title, content, tags, date };

    const result = await db.collection('entries').insertOne(journalEntry);
    res.status(201).json({ message: 'Journal entry created', entryId: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create journal entry' });
  }
});

app.get('/entries', async (req, res) => {
  try {
    const entries = await db.collection('entries').find().toArray();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch journal entries' });
  }
});

app.get('/entries/search', async (req, res) => {
  try {
    const { title, date } = req.query;
    const filter = {};
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (date) filter.date = new Date(date);

    const entries = await db.collection('entries').find(filter).toArray();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search journal entries' });
  }
});

app.put('/entries/:id', async (req, res) => {
  try {
    const entryId = req.params.id;
    const { title, content, tags, date } = req.body;

    const result = await db.collection('entries').updateOne(
      { _id: new ObjectId(entryId) },
      { $set: { title, content, tags, date } }
    );

    if (result.matchedCount === 0) {
      res.status(404).json({ error: 'Entry not found' });
    } else {
      res.status(200).json({ message: 'Journal entry updated' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update journal entry' });
  }
});

app.delete('/entries/:id', async (req, res) => {
  try {
    const entryId = req.params.id;

    const result = await db.collection('entries').deleteOne({ _id: new ObjectId(entryId) });

    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'Entry not found' });
    } else {
      res.status(200).json({ message: 'Journal entry deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete journal entry' });
  }
});

app.listen(2000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
