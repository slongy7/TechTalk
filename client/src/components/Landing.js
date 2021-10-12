import 'bulma/css/bulma.min.css';
import React from 'react'


const Landing = () => {
    return (
    
        <div className="column">
            <div className='column is-half'></div>
            TechTalk text box!
            <form className='form'>
            <br>

            </br>

            <div className="columns">
                <div className="column is-half">is-half</div>
                <div className="column"><input className='input' type='password' placeholder='********'></input></div>
                <div className="column">Auto</div>
            </div>

            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input className='input' type='email' placeholder='e.g. justin@example.com'></input>
                </div>
            </div>

            <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                    <input className='input' type='password' placeholder='********'></input>
                </div>
            </div>
            <button className="button is-primary">Sign In</button>
        </form>
        
        </div>
        
        )
    }
      
export default Landing