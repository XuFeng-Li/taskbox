import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./store/redux";

import InboxScreen from '../components/inboxScreen/InboxScreen';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
      <Provider>
        <InboxScreen />
      </Provider>
  );

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
