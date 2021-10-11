const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    postText: {
        type: String,
        required: true,
    },
    postAuthor: {
            type: String,
            required: true,
        },
    profileImage: {
            type: String,
            required: false,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            comment_text: {
                type: String,
                required: true,
            },
            user_name: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        }
    ]
});

const Post = model('Post', postSchema);

module.exports = {Post};