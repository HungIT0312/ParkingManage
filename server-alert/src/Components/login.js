import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/login.css'
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    };
   


    return (
       <div className='body1'>
            <div className="content1">
                <div className="content__header">
                    <h1 className="content__header-h1">Login</h1>
                </div>

                <form onSubmit={handleSubmit} className="content__body">
                    <input
                        type="text"
                        id="t1"
                        className="content__body-acc"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />

                    <input
                        type="password"
                        id="t2"
                        className="content__body-pass"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit" className="content__body-btn">Submit</button>
                </form>

                <div className="content__footer">
                    <label htmlFor="Sign" className="content__footer-alert">Don't have account?</label>
                    <Link  to="http://localhost:3000/register" id="Sign" className="content__footer-sign">Sign up.</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;