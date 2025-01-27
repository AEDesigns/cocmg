const { MongoClient } = require('mongodb')
require('dotenv').config();

let dbConnection
// let uri = 'mongodb://localhost:27017/'
let dbName = 'cocmg'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/')
        .then((client) => {
            dbConnection = client.db(dbName)
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}