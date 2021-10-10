const db = require('../config/connection');
const { Profile, Post, Job } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const postSeeds = require('./postSeeds.json');
const jobSeeds = require('./jobSeeds.json');


db.once('open', async () => {
    try {
        await Post.deleteMany({});
        await Job.deleteMany({});
        await Profile.deleteMany({});

        await Profile.create(profileSeeds);

        for(let i = 0; i < postSeeds.length; i++) {
            const { _id, postAuthor } = await Post.create(postSeeds[i]);
            const profile = await Profile.findOneAndUpdate(
                { username: postAuthor },
                {
                    $addToSet: {
                        posts: _id,
                    },
                }
            );
        }
        for(let i = 0; i < jobSeeds.length; i++) {
            const job = await Job.create(jobSeeds[i]);
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('done');
    process.exit(0);
})