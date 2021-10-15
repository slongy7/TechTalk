import React from 'react'

const Job = () => {

    return (
        <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
            </figure>
        </div>
    </div>
    );
}

export default Job;

const request = require('request');


// Indeed API code?

const options = {
  method: 'GET',
  url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
  qs: {
    publisher: 'undefined',
    v: '2',
    format: 'json',
    callback: '<REQUIRED>',
    q: 'java',
    l: 'austin, tx',
    sort: '<REQUIRED>',
    radius: '25',
    st: '<REQUIRED>',
    jt: '<REQUIRED>',
    start: '<REQUIRED>',
    limit: '<REQUIRED>',
    fromage: '<REQUIRED>',
    highlight: '<REQUIRED>',
    filter: '<REQUIRED>',
    latlong: '<REQUIRED>',
    co: '<REQUIRED>',
    chnl: '<REQUIRED>',
    userip: '<REQUIRED>',
    useragent: '<REQUIRED>'
  },
  headers: {
    'x-rapidapi-host': 'indeed-indeed.p.rapidapi.com',
    'x-rapidapi-key': '4a9bb43443mshce7991f3139be0ep1f0e4ejsndea25ff58f90',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});