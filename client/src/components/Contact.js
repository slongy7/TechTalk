import React, { Fragment } from "react";
import 'bulma/css/bulma.min.css';

function handleSubmit() {
    // <a
    //       id="gmail-button"
    //       class="btn btn-danger"
    //       href="mailto:clind323@gmail.com"
    //     ></a>
  console.log("Sending Email");
}

const Contact =() => {
  return (
  
    <Fragment>
    <main style={{maxWidth:800, padding:24, margin: "auto", marginBottom: 24 ,backgroundColor: 'rgb(199, 185, 140)', borderRadius: 8}}>
      <h1 className='title'>Contact Us</h1>
      {/* <div class="container d-flex justify-content-around">
      <a class="contactLinks" href="https://github.com/clind3" target="blank"><img
                        src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                        alt="github link button"/></a>
                <a class="contactLinks" href="https://www.linkedin.com/in/celina-lind-b31895171/"
                    target="blank"><img
                        src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                        alt="linkedin link icon"/></a>
                <a href="mailto: clind323@gmail.com"><img
                        src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'
                        alt="gmail icon link button" /> </a>
      </div> */}
      <h2 className="subtitle">Send an email.</h2>
      <div class="field">
     <label class="label">Name:</label>
     <div class="control">
       <input class="input" type="text" placeholder=" Enter full name"/>
     </div>
   </div>
  
   <div class="field">
     <label class="label">Email Address:</label>
     <div class="control">
       <input class="input" type="text" placeholder="Enter email here"/>
     </div>
   </div>
  
   <div class="field">
     <label class="label">Message</label>
     <div class="control">
       <textarea class="textarea" placeholder="Enter message here"></textarea>
     </div>
   </div>
  
   <div class="field is-grouped">
     <div class="control">
       <button class="button is-link">Submit</button>
     </div>
     <div class="control">
       <button class="button is-link is-light">Cancel</button>
     </div>
   </div>
      </main>
    </Fragment>
  )
}

export default Contact;