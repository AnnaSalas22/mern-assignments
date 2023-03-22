
import './App.css';
import { useState } from 'react';

function App(props) {
  const [count, setCount] = useState (45)
  const [ageCount, setAgeCount] = useState (88)
  return (
    <div className="App">
        <h1> Doe, Jane</h1>
        <p>Age: {count}</p>
        <p>Hair color: Black</p>
        <button onClick={() => setCount(count+1)}> Birthday button for Jane Doe</button>
        <h1> Smith, John</h1>
        <p>Age: {ageCount}</p>
        <p>Hair color: Black</p>
        <button onClick={() => setAgeCount(ageCount+1)}> Birthday button for John Smith</button>
    </div>
  );
}

export default App;
