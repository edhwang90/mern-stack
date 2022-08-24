const express = require('express');
const connectDB = require('../config/db');

const app = express();

connectDB.connect(err => {
  const collection = connectDB.db("test").collection("devices");
  // perform actions on the collection object
  connectDB.close();
});

app.get('/', (req, res) => res.send('hello world'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
