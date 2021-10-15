import React from 'react'

const Job = () => {

    return (

        <article className="message is-link">
            <div className="message-header">
                <p>Looking for a job?</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <p>Are you looking for a job in the technology field? Click the link below and we will redirect you to Indeed.</p>
                <div className="buttons">
                    <button className="button is-info" onClick="window.location.href='https://www.indeed.com/'">Click Here</button>
                </div>
            </div>
        </article>
    );
}

export default Job;