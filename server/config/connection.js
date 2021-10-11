const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/apollo-review');

module.exports = mongoose.connection;

//adding comment - delete later