import React, { Fragment } from "react";
import 'bulma/css/bulma.min.css';

const About = () => {
    return (
        <main style={{maxWidth:800, padding:24, margin: "auto", marginBottom: 24 , color: "white", backgroundColor: 'rgb(199, 185, 140)', borderRadius: 8}}>
            <h1 className='title'>About Us</h1>
            <p>Created by a team of Full Stack Web Developers who recently graduated from the OSU Full Stack Bootcamp. Justin, Alyson, Celina, and Bo created a new social media platform meant to bring together technical professials in a nonformal setting. We hope you enjoy our MVP application and please contact us with any suggestions for updates in the future.
             </p>  
               <br></br>
            <p>And don't forget to 'Mind ya business' :)
            </p>
        </main>
    );
}

export default About;