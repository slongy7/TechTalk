import 'bulma/css/bulma.min.css';
import React from 'react'

const AllBulma = () => {
    return (
        // blue button
    <div className="buttons">
        <button class="button is-primary">Sign In</button>

        <div class="box">
            TechTalk text box!
  
        </div>

        // sign in box   
        <form class='box' style='boxSizing: content-box'>
            <div class='field'>
                <label class='label'>Email</label>
                <div class='control'>
                    <input class='input' type='email' placeholder='e.g. justin@example.com'></input>
                </div>
            </div>

            <div class='field'>
                <label class='label'>Password</label>
                <div class='control'>
                    <input class='input' type='password' placeholder='********'></input>
                </div>
            </div>
        </form>

    //profile box
        <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Justin Long</strong> <small>@thejustinlong</small> <small>31m</small>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>

    </div>
    )
}

export default AllBulma