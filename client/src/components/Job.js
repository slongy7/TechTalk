import React from 'react'

const Job = () => {

    return (

        <article className="message is-info">
            <div className="message-header">
                <p>Looking for a job?</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <p>Are you looking for a job in the technology field? Click the link below and we will redirect you to Indeed.</p>
                <br></br>
                <div className="buttons">
                    <button className="button is-info" onClick="window.location.href='https://www.indeed.com/'">Click Here</button>
                </div>
            </div>
        </article>
    );
}

export default Job;

const request = require('request');


// Indeed API code?

// const options = {
//   method: 'GET',
//   url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
//   qs: {
//     publisher: 'undefined',
//     v: '2',
//     format: 'json',
//     callback: '<REQUIRED>',
//     q: 'java',
//     l: 'austin, tx',
//     sort: '<REQUIRED>',
//     radius: '25',
//     st: '<REQUIRED>',
//     jt: '<REQUIRED>',
//     start: '<REQUIRED>',
//     limit: '<REQUIRED>',
//     fromage: '<REQUIRED>',
//     highlight: '<REQUIRED>',
//     filter: '<REQUIRED>',
//     latlong: '<REQUIRED>',
//     co: '<REQUIRED>',
//     chnl: '<REQUIRED>',
//     userip: '<REQUIRED>',
//     useragent: '<REQUIRED>'
//   },
//   headers: {
//     'x-rapidapi-host': 'indeed-indeed.p.rapidapi.com',
//     'x-rapidapi-key': '4a9bb43443mshce7991f3139be0ep1f0e4ejsndea25ff58f90',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });