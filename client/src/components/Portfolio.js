import React, {useState} from 'react'
import {QUERY_ME, QUERY_PROFILE} from '../utils/queries'
import {useQuery} from '@apollo/client'
import { Redirect, useParams } from 'react-router-dom';
import Auth from '../utils/auth';


const Portfolio = () => {
    const {username: userParam} = useParams();

    const {loading, data} = useQuery(userParam ? QUERY_PROFILE: QUERY_ME, {
        variables: {username: userParam}
    });
    // param comes back as undefined
    console.log('param: ' + userParam);
    console.log('username: ' + user);
    const user = data?.me || data?.user || {};

    if(Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        <Redirect to="/me"/>;
    }

    if(loading) {
        return <div>Loading...</div>
    }

    if (user?.name) {
      return (
        <h4>
          You need to be logged in to create posts or interact. Please sign up or log in.
        </h4>
      )
    }

    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
            </figure>
        </div>
        <article className="media">
          {/* <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
            </figure>
          </div> */}
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{userParam? `${user.name}`: 'No logged in user'}</strong> <small>@thejustinlong</small> <small>31m</small>
                <br></br>
                {/* /* {userParam.bio? `${user.bio}`: ''} */}
                Hello there shoop
              </p>
            </div>
            {/* <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav> */}
          </div>
        </article>
    </div>
    )
}

export default Portfolio