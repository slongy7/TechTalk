const { Schema, model } = require('mongoose');

const postSchema = new Schema({});

const Post = model('Post', postSchema);

module.exports = {Post};