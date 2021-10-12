import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql `
    query profile($username: String!) {
        profile(username: $username) {
            _id
            username
            email
            posts {
                _id
                postText
                createdAt
            }
            jobs {
                _id
                jobTitle
                createdAt
                companyName
                jobDescription
            }
        }
    }
`;

export const QUERY_POSTS = gql `
    query getPosts {
        posts {
            _id
            postText
            postAuthor
            profileImage
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }

`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_JOBS = gql `
  query getJobs {
      jobs {
        _id
        jobTitle
        createdAt
        companyName
        jobDescription
        }
    }
`;

export const QUERY_SINGLE_JOB = gql`
  query getSingleJob($jobId: ID!) {
    job(jobId: $jobId) {
      _id
      jobText
      jobAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;