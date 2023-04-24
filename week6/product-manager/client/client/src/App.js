import './App.css';
import MyProduct from './components/MyProduct';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      
        <h1>Product Manager</h1>
        <Routes>
        < Route path='/' element= {<Main/>} />
        <Route path='/product/:id' element= {<MyProduct/>} />
        </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
