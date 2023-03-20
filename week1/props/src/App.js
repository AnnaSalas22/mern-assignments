import './App.css';
import PersonCard from './components/PersonCard';

function App(props) {
  return (
    <div className="App">
      <PersonCard familyName={'Doe'} firstName={'Jane'} age={'45'} hairColor={'Blond'}/>
      <PersonCard familyName={'Smith'} firstName={'John'} age={'88'} hairColor={'Brown'}/>
      <PersonCard familyName={'Fillmore'} firstName={'Millard'} age={'50'} hairColor={'Brown'}/>
      <PersonCard familyName={'Smith'} firstName={'Maria'} age={'62'} hairColor={'Brown'}/>    
    </div>
  );
}
export default App;
