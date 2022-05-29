import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
function computeInitialCounter() {
  console.log('Some calculation');
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter]= useState(0);
  const [counter2, setCounter2]= useState(() => {
    return computeInitialCounter()
  });

  function increment() {
    setCounter(counter + 1)
    setCounter2((prevCounter) => {
      return prevCounter + 1
    })
  }
  function decrement() {
    setCounter(counter - 1);
    setCounter2((prevCounter) => {
      return prevCounter - 1
    })
  }
  return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Counter: {counter}</h2>
            <div>
              <button onClick={increment} className="increment">+</button>
              <button onClick={decrement} className="decrement">-</button>
            </div>
            <h2>Counter: {counter2}</h2>
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
      </>
  );
}

export default App;
