import React from "react";
import logo from "./assets/img/logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="main">
        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
          <button className="button is-info">Info</button>
          <button className="button is-success">Success</button>
          <button className="button is-warning">Warning</button>
          <button className="button is-danger">Danger</button>
          <button className="button is-black">Black</button>
          <button className="button is-white">White</button>
          <button className="button is-dark">Dark</button>
          <button className="button is-light">Light</button>
        </div>
      </div>
    </div>
  );
}

export default App;
