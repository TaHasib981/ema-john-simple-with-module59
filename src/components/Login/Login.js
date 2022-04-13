import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-info'>
                <div>
                    <form action="">
                        <div className='form-title'><h2 >Login</h2></div>
                        <div className="input-group">
                            <label htmlFor="email">email</label> <br />
                            <input type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">password</label> <br />
                            <input type="password" name="password" id="" required />
                        </div>
                        <button className='form-submit'>Login</button>
                    </form>
                    <p>New to ema john? <Link to="/signup">create new account</Link></p>
                    <div className='or-div'>
                        <div>__________________</div>
                        <div className='or'>or</div>
                        <div>___________________</div>
                    </div>
                    <button className='google-button'>Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;