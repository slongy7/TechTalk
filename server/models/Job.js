const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
    companyName: {
        type: String,
        require: true,
    },
    jobSalary: {
        type: Number,
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    jobLogo: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: false,
    },
    jobLocation: {
        type: String,
        required: true,
    }

});

const Job = model('Job', jobSchema);

module.exports = Job;