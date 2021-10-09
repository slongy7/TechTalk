import 'bulma/css/bulma.min.css';
import React from 'react'


const Landing = () => {
    return (
    
        <div class="box">
            TechTalk text box!
            <form class='box'>
            <br>

            </br>

            <div className='field'>
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
            <button class="button is-primary">Sign In</button>
        </form>
        
        </div>
        
        )
    }
      
export default Landing