import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [ createUserWithEmailAndPassword, user,] = useCreateUserWithEmailAndPassword(auth);

    const emailBlur = event =>{
        setEmail(event.target.value)
    }
    const passwordBlur = event =>{
        setPassword(event.target.value)
    }
    const confirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
       navigate('/inventory')
    }
    const handleCreateUser = event =>{
        event.preventDefault()

        if(password !== confirmPassword){
            setError('confirm password did not match')
            return
        }
        if(password.length < 6){
            setError('password should be six character')
        }

        createUserWithEmailAndPassword(email, password)
    }



    return (
        <div className='login-container'>
            <div className='login-info'>
                <div>
                    <form onSubmit={handleCreateUser} action="">
                        <div className='form-title'><h2 >SingUp</h2></div>
                        <div className="input-group">
                            <label htmlFor="email">email</label> <br />
                            <input onBlur={emailBlur} type="email" name="email" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">password</label> <br />
                            <input onBlur={passwordBlur} type="password" name="password" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">confirm-password</label> <br />
                            <input onBlur={confirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                        </div>
                        <p style={{color:'red'}}>{error}</p>
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