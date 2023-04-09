
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Hello from './components/hello';
import Red from './components/red';
import Word from './components/word';
import './App.css';



const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/hello" element={<Hello />}/>
          <Route path="/red" element={<Red />}/>
          <Route path="/word/:id" element={<Word />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
