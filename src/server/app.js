const express = require('express')
const { getDb, connectToDb } = require('./db')
const cors = require('cors');

// init app & middleware
const app = express()
app.use(cors());

// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen('3000', () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})

// routes
app.get('/athletics', async (req, res) => {
  try {
    const athletes = db.collection('athletes');
    const results = await athletes
      .aggregate([
        { $sort: { class: 1 } } 
      ])
      .toArray(); // Convert the aggregation result to an array

    res.status(200).json(results); // Send athletes data as JSON
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Could not fetch the documents' });
  }
});
