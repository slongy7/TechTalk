import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
          token
            profile {
                _id
                username
            }  
        }
    }
`;

export const ADD_PROFILE = gql`
    mutation addProfile($name: String!, $username: String!, $email: String!, $password: String!, $bio: String){
        addProfile(name: $name, username: $username, email: $email, password: $password, bio: $bio){
            token
            profile {
                _id
                username
            } 
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($postText: String!) {
        addPost(postText: $postText){
            post {
                _id
                postText
                postAuthor
                createdAt
                comments {
                    _id
                    commentText
                }
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($postId: ID!, $commentText: String!) {
        addComment(postId: $postId, commentText: $commentText){
            _id
            postText
            postAuthor
            createdAt
            comments {
                _id
                commentText
                createdAt
            }
        }
    }
`;

