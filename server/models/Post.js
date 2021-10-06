const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    postText: {
        type: String,
        required: true,
    },
    userName: {
            type: String,
            required: true,
        },
    profileImage: {
            type: String,
            required: false,
    },
    date: {
        type: Date,
        required: true,
    }
});

const Post = model('Post', postSchema);

module.exports = {Post};