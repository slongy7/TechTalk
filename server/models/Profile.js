const { Schema, model } = require('mongoose');

const profileSchema = new Schema({});

const Profile = model('Comment', profileSchema);

module.exports = {Profile};