const { Schema, model } = require('mongoose');

const jobSchema = new Schema({});

const Job = model('Job', jobSchema);

module.exports = {Job};