import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
    return (
        <div className='login-container'>
            <div className='login-info'>
                <div>
                    <form action="">
                        <div className='form-title'><h2 >SingUp</h2></div>
                        <div className="input-group">
                            <label htmlFor="email">email</label> <br />
                            <input type="email" name="email" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">password</label> <br />
                            <input type="password" name="password" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">confirm-password</label> <br />
                            <input type="password" name="confirm-password" id="" required/>
                        </div>
                        <button className='form-submit'>Submit</button>
                    </form>
                    <p>Already have an accout? <Link to="/login">login</Link></p>
                    <div className='or-div'>
                        <div>__________________</div>
                        <div className='or'>or</div>
                        <div>___________________</div>
                    </div>
                    <div className='google-container'>
                        
                        <button className='google-button'>Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;