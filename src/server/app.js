const express = require('express');
const { getDb, connectToDb } = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

let db;

// Connect to DB
connectToDb((err) => {
  if (!err) {
    app.listen('3000', () => {
      console.log('App listening on port 3000');
    });
    db = getDb();
  }
});

// GET route to fetch athletes
app.get('/athletics', async (req, res) => {
  try {
    const athletes = db.collection('athletes');
    const results = await athletes.find().sort({ class: 1 }).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Could not fetch the documents' });
  }
});

// POST route to save registration data
app.post('/register', async (req, res) => {
  try {
    const { name, class: className } = req.body; // Extract data from request

    if (!name || !className) {
      return res.status(400).json({ error: 'Name and class are required.' });
    }

    const athletes = db.collection('athletes');
    const result = await athletes.insertOne({ name, class: className });

    res.status(201).json({ message: 'Registration successful!', id: result.insertedId });
  } catch (error) {
    console.error('Error registering:', error);
    res.status(500).json({ error: 'Registration failed, please try again.' });
  }
});
