import { useState } from "react"

const Form = (props) => {

    const {pokemonCard, setPokemonCard}= props
    var log = console.log.bind(console)
    log(pokemonCard, setPokemonCard)

    const [pokeName, setPokeName] = useState("")

    const changeHandler = (e) => {
        log(e)
        setPokeName({[e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault ()
        setPokemonCard ([...pokemonCard, {pokeName}])
    }

    return (
        <form onSubmit={submitHandler}id="poke-form">
            <h1> I chose You!</h1>
        <div className="form-group">
            <input type="text" name="pokeSearch" placeholder='... awaiting pokemon name' onChange={changeHandler}/>
            <input type="submit" value="Generate Pokemon"></input>

        </div>
        </form>
    );
}

export default Form;
