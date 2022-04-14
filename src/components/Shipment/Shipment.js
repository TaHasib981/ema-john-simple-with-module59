import React, { useState } from 'react';


const Shipment = () => {

    const [name, setName] = useState('')
    const [surename, setSurename] = useState('')
    const [distric, setDistric] = useState('')



    const emailBlur = event => {
        setName(event.target.value)
    }
    const passwordBlur = event => {
        setSurename(event.target.value)
    }
    const confirmPasswordBlur = event => {
        setDistric(event.target.value)
    }

    const handleCreateUser = event =>{
        event.preventDefault()
      
    }


    return (
        <div className='login-container'>
            <div className='login-info'>
                <div>
                    <form onSubmit={handleCreateUser} action="">
                        <div className='form-title'><h2 >Shipping</h2></div>
                        <div className="input-group">
                            <label htmlFor="text">name</label> <br />
                            <input onBlur={emailBlur} type="text" name="name" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">sure name</label> <br />
                            <input onBlur={passwordBlur} type="text" name="surename" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">distric</label> <br />
                            <input onBlur={confirmPasswordBlur} type="text" name="distric" id="" required />
                        </div>
                        <button className='form-submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;