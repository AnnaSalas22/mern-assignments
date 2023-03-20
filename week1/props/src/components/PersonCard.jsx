import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h1> {props.familyName}, {props.firstName}</h1>
            <p>Age: {props.age}<br/>
            Hair color: {props.hairColor}</p>
        </div>
    ) ; 
} 

export default PersonCard;
