import React, { useState, useEffect } from "react"
import Form from './components/form';
import axios from 'axios';
import './App.css';

function App() {
  
  const [pokeName, setPokeName] = useState([])

  console.log(pokeName)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      console.log ('RESPONSE');
      setPokeName(response.data.results)
    })
    
    .catch((pokeErr)=> {
      console.log(pokeErr);
    })
},[])

  return (
    <div className="App">
      <Form pokeName={pokeName} setPokeName={setPokeName} />
      {
      pokeName.map((pokemon, idx) => (
        <div key={idx}>
          <h1>{pokemon.name}</h1>
        </div>
      ))
      }
    </div>
  );
}

export default App;
