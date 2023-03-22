import React from 'react';

const Alert = (props) => {
    const alertButton = () => {
        alert('')
    }
    return (
        <div>
            <button onClick={alertButton}></button>
        </div>
    );
}

export default Alert;
