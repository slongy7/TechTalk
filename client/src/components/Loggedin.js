import 'bulma/css/bulma.min.css';
import React from 'react'

const Loggedin = () => {
      return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Justin Long</strong> <small>@thejustinlong</small> <small>31m</small>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav className="level is-mobile">
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
            </nav>
          </div>
        </article>

        <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      Post
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br></br>
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer className="card-footer">
    <a href="#" className="card-footer-item">Save</a>
    <a href="#" className="card-footer-item">Edit</a>
    <a href="#" className="card-footer-item">Delete</a>
  </footer>
</div>
</div>
      
      )
}
  
export default Loggedin;


