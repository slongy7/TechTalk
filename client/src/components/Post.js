import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const PostForm = () => {
    const [postText, setPostText] = useState('');

    // const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });

                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } },
            });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addPost({
                variables: {
                    postText,
                    postAuthor: Auth.getProfile().data.username,
                },
            });

            setPostText('');
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'postText' && value.length <= 280) {
            setPostText(value);
            // setCharacterCount(value.length);
        }
    };

    return (
        <div className="card block">
            <header className="card-header">
                <p className="card-header-title">
                    What's on your mind?
                </p>
                {/* <button className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button> */}
            </header>
            {Auth.loggedIn() ? (
                
                <div className="card-content">
                    <form className="content" onSubmit={handleFormSubmit}>
                        <textarea
                            name="postText"
                            placeholder="e.g. Hello world"
                            value={postText.postText}
                            className="textarea"
                            onChange={handleChange}
                        ></textarea>
                        <button className="button" type="submit">Save</button>
                        {/* <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a> */}
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </form>
                </div>
            ) : (
                <p>
                    You need to be logged in to share your thoughts. Please {' '}
                    <Link to="/login">login</Link> or <Link to="/signup"> signup.</Link>
                </p>
            )}
        </div >
    )
    
};

export default PostForm;