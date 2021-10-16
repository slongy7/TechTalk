import React, {useState} from 'react'
import {QUERY_ME, QUERY_PROFILE} from '../utils/queries'
import {useQuery} from '@apollo/client'
import { Redirect, useParams } from 'react-router-dom';
import Image01 from "../img/male1.jpg";
import Auth from '../utils/auth';


const Portfolio = () => {
    // const {username: userParam} = useParams();

    // const {loading, data} = useQuery(userParam ? QUERY_PROFILE: QUERY_ME, {
    //     variables: {username: userParam}
    // });
    // // param comes back as undefined
    // console.log('param: ' + userParam);
    // console.log('username: ' + user);
    // const user = data?.me || data?.user || {};

    // if(Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     <Redirect to="/me"/>;
    // }

    // if(loading) {
    //     return <div>Loading...</div>
    // }

    // if (user?.name) {
    //   return (
    //     <h4>
    //       You need to be logged in to create posts or interact. Please sign up or log in.
    //     </h4>
    //   )
    // }

    return (
    <div className="card block">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={Image01} alt="Image of profile user"/>
            </figure>
        </div>
        <article className="media" style={{paddingTop: 8,paddingBottom:24, paddingLeft: 24, paddingRight:24, margin: "auto"}}>
          {/* <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
            </figure>
          </div> */}
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Justin Long</strong> <small>@thejustinlong</small>
                <br></br>
                Hey! I'm Justin and I love dogs, creating React apps and the Ohio State Buckeyes! O-H!
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