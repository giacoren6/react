import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProbs from './components/FunctionalGreetingWithProbs';
import FunctionalGreeting from './components/FunctionalGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProbs />
    </div>
  );
}

export default App;
