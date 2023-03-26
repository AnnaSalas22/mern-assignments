import React from 'react';
import { useState } from 'react';

    const Form = (props) => {
        const [ firstName, setFirstName ] = useState("");
        const [ lastName, setLastName ] = useState("");
        const [ email, setEmail ] = useState("");
        const [ password, setPassword ] = useState("");
        const [ confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className= 'container'>
            <form>
                <div className= 'userInput'>
                    <label> First Name</label>
                    <input type="text" 
                    name='firstName' 
                    onChange={handleFirstName}/>
                </div>
                {
                    firstName.length < 3 && firstName.length !==0 ?
                    <p> First Name must be at least 2 characters</p>:
                    null
                }

                <div className='userInput'>
                <label>Last Name</label>
                <input type="text" name='firstName' onChange={handleLastName}/>
                </div>

                {
                    lastName.length < 3 && lastName.length !==0  ?
                    <p>Last name should be at least 2 characters</p>:
                    null
                }
            </form>
        </div>
    );
}

export default Form;
