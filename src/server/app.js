const express = require('express')
const { getDb, connectToDb } = require('./db')

// init app & middleware
const app = express()

// db connection
let db

connectToDb((err) => {
  if(!err){
    app.listen('3000', () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
    console.log(db)
  }
})

// routes
app.get('/athletics', (req, res) => {
    let planets = []

  db.collection('planets')
    .find()
    .sort({name: 1})
    .forEach(planet => console.log(planet))
    .then(() => {
      res.status(200).json(planets)
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch the documents'})
    })
})