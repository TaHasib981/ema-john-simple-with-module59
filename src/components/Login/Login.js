import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const emailOnBlur = event => {
        setEmail(event.target.value)
    }
    const passwordOnBlur = event => {
        setPassword(event.target.value)
    }

    const handleLoginUser = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='login-container'>
            <div className='login-info'>
                <div>
                    <form onSubmit={handleLoginUser} action="">
                        <div className='form-title'><h2 >Login</h2></div>
                        <div className="input-group">
                            <label htmlFor="email">email</label> <br />
                            <input onBlur={emailOnBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">password</label> <br />
                            <input onBlur={passwordOnBlur} type="password" name="password" id="" required />
                        </div>
                        <p>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
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