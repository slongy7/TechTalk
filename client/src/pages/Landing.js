import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import 'bulma/css/bulma.min.css';
import '../img/TechTalk.png';

const Landing = (Image) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event);

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (error) {
            console.error(error);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
    
        <div className='columns is-half'>
            <div className='column is-8'></div>
            {/* <img>'../img/TechTalk.png</img> */}
            <figure className="image is-128x128">
                <img src={Image}></img>
            </figure>
            
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/feed">to your feed.</Link>
              </p> 
            ) : (
            
            <form onSubmit = {handleFormSubmit} className='box'>
                <br></br>

                <div className='columns is-mobile is-centered'>
                    <div className='columns is-half'></div>
                    <p className='bd-notification is-primary'></p>
                </div>

                <a href="./Signup.js">Signup</a>

                <br></br>

                <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                        <input 
                        className='input' 
                        name="email"
                        type='email' 
                        placeholder='e.g. justin@example.com'
                        value={formState.email}
                        onChange={handleChange}></input>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Password</label>
                    <div className='control'>
                        <input 
                        className='input' 
                        name="password"
                        type='password' 
                        placeholder='********'
                        value={formState.password}
                        onChange={handleChange}></input>
                    </div>
                </div>
                <button className="button is-primary">Sign In</button>
            </form>

        )} 
        
        </div>
        
        )
    }


export default Landing;