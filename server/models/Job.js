const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
    job_name: {
        type: String,
        require: true,
    },
    job_salary: {
        type: Number,
        required: false,
    },
    created_at: {
        type: Date,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    job_logo: {
        type: String,
        required: true,
    },
    job_description: {
        type: String,
        required: false,
    },
    job_location: {
        type: String,
        required: true,
    }

});

const Job = model('Job', jobSchema);

module.exports = {Job};