const { MongoClient } = require("mongodb");
const config = require("../config");

const client = new MongoClient(config.db.uri);

async function connect(uri) {
  try {
    await client.connect();
    console.log("Connected to the database!");
    return client;
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
}

module.exports = { connect, client };
