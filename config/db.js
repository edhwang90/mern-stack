const config = require('config');
const uri = config.get('mongoURI');
const { MongoClient, ServerApiVersion } = require('mongodb');

const connectDB = new MongoClient(
  uri, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
  }
);

module.exports = connectDB;