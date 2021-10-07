const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        username: String
        email: String
        password: String
        bio: String
        profileImage: String
        posts: [Post]!
        jobs: [Job]!
    }

    type Post {
        _id: ID
        postText: String
        postAuthor: String
        profileImage: String
        date: Date
        comments: [Comment]!
    }
    type Job {
        _id: ID
        companyName: String
        jobSalary: Number
        createdAt: Date
        jobTitle: String
        jobLogo: String
        jobDescription: String
        jobLocation: String
    }
    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        profiles: [Profile]
        profile(username: String!): Profile
        posts(username: String): [Post]
        post(postId: ID!): Post
        jobs(username: String): [Job]
        job(jobId: ID!): Job
        me: Profile
    }

    type Mutation {
        addProfile(name: String!, username: String!, email: String!, password: String!, bio: String): Auth
        login(email: String!, password: String!): Auth
        addPost(postText: String!): Post
        addComment(postId: ID!, commentText: String!): Post
    }
`;


module.exports = typeDefs;