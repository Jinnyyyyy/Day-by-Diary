const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sei:12345@sei.mu3p9.mongodb.net/daybydiary?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// shortcut to mongoose.connection objec
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});