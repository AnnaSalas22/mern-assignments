import React from 'react';

const PersonaCard = (props) => {
    console.log(props);
    return (
        <div>
            <h1>
                {props.lastName}, {props.firstName}
            </h1>
            <p>Age: {props.age}</p>
            <p>Hair: {props.hairColor}</p>
        </div>
    );
}

export default PersonaCard;
