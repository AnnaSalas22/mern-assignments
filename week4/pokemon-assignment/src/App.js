import './App.css';
import Form from './components/form';
import Display from './components/display';
import axios from 'axios';
import React, { useState, useEffect } from "react"


function App() {
  
  const [pokemonCard, setPokemonCard] = useState([])

  console.log(pokemonCard)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      console.log ('RESPONSE');
      setPokemonCard(response.data.results)
    })
    
    .catch((pokeErr)=> {
      console.log(pokeErr);
    })
},[])

  return (
    <div className="App">
      <Form pokemonCard={pokemonCard} setPokemonCard={setPokemonCard} />
      <Display pokemonCard={pokemonCard}/>
    </div>
  );
}

export default App;
