import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './App1'
import Class1 from './ClassCom'

export default function App() {
  let a = 'a'
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      Hello world
      <App1 data="property from App1" name="name" age={3} send={a}/>
      <Class1 data="property from Class1" age = {2}/>
    </div>
  );
}

// export default App;
const Component  = ()=> {
  return <div>this is component function</div>
}
const data = "data"

export { Component, data}