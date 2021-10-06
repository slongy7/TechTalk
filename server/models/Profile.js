const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    first_name: {
        type: String, 
        required: true,
        trim: true,
    },
    last_name: {
        type: String, 
        required: true,
        trim: true,
    },
    user_name: {
        type: String,
        required: true,
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
    }
});

const Profile = model('Profile', profileSchema);

module.exports = {Profile};