const express = require('express');
const connectDB = require('../config/db');
var cors = require('cors');
const books = require('./routes/api/books');

const app = express();

connectDB.connect(err => {
  const collection = connectDB.db("test").collection("devices");
  // perform actions on the collection object
  connectDB.close();
});

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));