import { useState } from "react";
import axios from 'axios'

const Form = (props) => {
    const [pokeName, setPokeName] = useState("")

    const onClickHandler = (e) => {
        e.preventDefault ()
        setPokeName ([...pokeName, {pokeName}])
    }

    return (
        <button  onClick= {onClickHandler} id="poke-form" value="Fetch Pokemon">Fetch Pokemon
        </button>
    );
}

export default Form;
