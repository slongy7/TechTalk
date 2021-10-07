const { AuthenticationError } = require('apollo-server-express');
const { Job, Post, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find().populate('posts');
        },
        profile: async (parent, { username }) => {
            return Profile.findOne({ username }).populate('posts');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return Profile.findOne({ _id: context.user._id }).populate('posts');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        jobs: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Job.find(params);
        },
        job: async (parent, { jobId }) => {
            return Job.findOne({ _id: jobId });
        },
    },

    Mutation: { 
        addProfile: async (parent, { name, username, email, password, bio }) => {
            const profile = await Profile.create({ name, username, email, password, bio });
            const token = signToken(profile);
            return { token, profile };
        },
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });

            if(!profile) {
                throw new AuthenticationError('User with this email address was not found');
            }

            const correctPass = await user.isCorrectPassword(password);

            if(!correctPass) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(profile);

            return { token, profile };
        },
        addPost: async (parent, { postText }, context) => {
            if (context.profile) {
                const post = await Post.create({
                    postText,
                    postAuthor: context.profile.username,
                    postImage: context.profile.profileImage,
                });

                await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: { posts: post._id } }
                );

                return post;
            }
            throw new AuthenticationError("Please log in");
        },
        addComment: async (parent, { commentText, postId }, context) => {
            if (context.profile) {
                return Post.findOneAndUpdate(
                    { _id: postId },
                    {
                        $addToSet: {
                            comments: { commentText, commentAuthor: context.profile.username },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError ('Please log in');
        },
        //continue with addJob
    },
};


module.exports = resolvers;