
import './App.css';
import { useState } from 'react';
import PersonaCard from './PersonaCard';

function App(props) {
  const {count, setCount} = useState(45)
  return (
    <div className="App">
        <PersonaCard lastName={'Doe'} firstName={'Jane'} age={45} hairColor={"Black"} {count}/>
    
        <PersonaCard lastName={'Smith'} firstName={"John"} age={88} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
