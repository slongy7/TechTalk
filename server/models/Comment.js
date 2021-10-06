const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
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
        required: true,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = {Comment};