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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
            },
            username: {
                type: String,
                required: true
            },
            createdDate: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        }
    ]
});

const Post = model('Post', postSchema);

module.exports = {Post};