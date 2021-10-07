const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    name: 
        {
            firstName: {
                type: String, 
                required: true,
                trim: true, 
            },
            lastName: {
                type: String, 
                required: true,
                trim: true,
            },
        },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    bio: {
        type: String, 
        maxlength: 250,
    },
    profileImage: {
        type: String,
        required: false,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});

const Profile = model('Profile', profileSchema);

module.exports = {Profile};