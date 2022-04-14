import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [distric, setDistric] = useState('')



    const nameBlur = event => {
        setName(event.target.value)
    }
    const numberBlur = event => {
        setPhone(event.target.value)
    }
    const addressBlur = event => {
        setDistric(event.target.value)
    }

    const handleCreateUser = event =>{
        event.preventDefault()
      const shippingInfo = {name, phone , distric}
      console.log(shippingInfo);
    }



    return (
        <div className='login-container'>
            <div className='login-info'>
                <div>
                    <form onSubmit={handleCreateUser} action="">
                        <div className='form-title'><h2 >Shipping</h2></div>
                        <div className="input-group">
                            <label htmlFor="text">name</label> <br />
                            <input onBlur={nameBlur} type="text" name="name" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">your email</label> <br />
                            <input value={user?.email} readOnly type="text" name="surename" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">address</label> <br />
                            <input onBlur={addressBlur} type="text" name="distric" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="number">phone</label> <br />
                            <input onBlur={numberBlur} type="number" name="number" id="" required />
                        </div>
                        <button className='form-submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;