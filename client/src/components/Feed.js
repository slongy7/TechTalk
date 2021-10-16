import React from 'react'
import Female1 from '../img/female1.jpg'
import Female2 from '../img/female3.jpg'
import Male2 from '../img/male2.jpg'
import Male1 from '../img/male1.jpg'


const Feed = () => {
    return (
<div className="box">        
<article className="media">
  <figure className="media-left">
    <p className="image is-64x64">

      <img src={Female1} alt="Celina's Profile pic"/>
    </p>
  </figure>
  <div className="media-content">
    <div classNameName="content">
      <p>
        <strong>Celina Lind</strong>
        <br></br>
        Hey all you cool techy cats and kittens! I'm currently attending a web dev program and want to form a study group.. anyone in?
        <br></br>
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        <footer className="card-footer">
          <small><a href="#" className="card-footer-item">Save</a></small>
          <small><a href="#" className="card-footer-item">Edit</a></small>
          <small><a href="#" className="card-footer-item">Delete</a></small>
        </footer>
      </p>
    </div>

    <article className="media">
      <figure className="media-left">
        <p className="image is-48x48">
          <img src={Male2} alt="Bo's profile pic"/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>Bo Vari</strong>
            <br></br>
            Hey Celina! I'd definitely be interested in a study group! I'm working on learning C# right now.. what about you?
            <br></br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>

    <article className="media">
      <figure className="media-left">
        <p className="image is-48x48">
          <img src={Female2} alt="Alyson's profile pic"/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>Alyson Orta</strong>
            <br></br>
            I'm in! I LOVE coffee.. we should meet up at a local shop and study!
            <br></br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</article>

<article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src={Male1} alt="Justin's profile pic"/>
    </p>
  </figure>
  <div className="media-content">
    <div className="field">
      <p className="control">
        <textarea className="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button className="button">Post comment</button>
      </p>
    </div>
  </div>
</article>
</div>
    )
}

export default Feed