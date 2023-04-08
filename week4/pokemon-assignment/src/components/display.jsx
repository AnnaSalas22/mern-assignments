import React from 'react';


const Display = (props) => {

    const {pokemonCard}= props
    var log =console.log.bind(console)
    log("DISPLAY PROPS:", pokemonCard)
    return (
        <div className= "poke-warrior">
            
        </div>
    );
}

export default Display;
