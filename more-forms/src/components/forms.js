import React, { useState } from  'react';

    
const Forms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");   
    
    const createUser = () => {
            
        const newUser = { 
            firstName: firstName,
            lastName: lastName, 
            email: email, 
            password: password,
            setConfirmPassword: setconfirmPassword 
        };
        console.log(newUser);
    };
    return(
    <div>
        <form>
            <div className=''>
                <label>First Name: </label> 
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>

             {
                firstName.length <3 && firstName.length !==0 ?
                <p>First Name must be at least 2 characters</p>:
                null
             }

            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>

            {
                lastName.length <3 && lastName.length !==0 ?
                <p>Last Name must be at least 2 characters</p>:
                null
             }

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {
                email.length <3 && email.length !==0 ?
                <p>Email must be at least 2 characters</p>:
                null
            }

            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
             
             {
             password.length <3 &&  password.length !==0 ?
            <p> Password must be at least 8 characters</p>:
             null
             }

            <div>
                <label>Cornfirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            {
             confirmPassword.length <3 &&   confirmPassword.length !==0 ?
            <p> Password must match!</p>:
             null
             }   
        </form>
        </div>
    );
};


export default Forms;

