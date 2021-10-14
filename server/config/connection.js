const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tech_talk');

module.exports = mongoose.connection;

