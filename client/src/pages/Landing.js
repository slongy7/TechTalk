import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Signup from '../components/Signup';
import Auth from '../utils/auth';
import 'bulma/css/bulma.min.css';
import TechTalk from '../img/techtalklogo.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Landing = () => {
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

        <Router>
            <div className='columns'>
            <div className='column is-1'></div>
                <div className="box column is-5">
                <div className='box column is-12'>
                    <figure className="image is-4by3">
                        <img src={TechTalk}></img>
                    </figure>
                    <p className="title is-3 has-text-centered">"A social network for tech professionals"</p>
                </div>
                </div>
                
                <div className='column is-1'></div>

                {data ? (
                    <p>
                        Success! You may now head{' '}
                        <Link to="/feed">to your feed.</Link>
                    </p>
                ) : (
                    

                    <div className = "column is-3">
                        <form onSubmit={handleFormSubmit} className='column box'>
                            <br></br>

                            <div className='column is-mobile is-centered'>
                                <p className='title is-3 has-text-centered'>Login or Signup </p>
                            </div>

                            <div className="buttons">
                                <a href="./signup" className="button is-primary" id="signup">
                                    <strong>Sign up</strong>
                                </a>
                            </div>

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
                            <button className="button is-primary">Login</button>
                        </form>
                    </div>

                )}

            </div>
        </Router>

    )
}



export default Landing;