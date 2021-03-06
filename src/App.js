import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter  value={0} min={-5} max={10}/>
        <Counter value={5} min={0} max={10}/>
        <Counter value={5} min={0} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
