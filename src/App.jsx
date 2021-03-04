import React from "react";
import { Provider } from "react-redux";
import logo from './logo.svg';
import store from "./store/redux";

import InboxScreen from './components/inboxScreen/InboxScreen';
// import logo from './logo.svg';
import './App.css';
import {XFStoryBookDemoTask} from "xf-storybook-demo-task";

function App() {
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
      <body>
      <XFStoryBookDemoTask />
      </body>
      {/*<script src='../dist/bundle.cjs.js' />*/}
    </div>
  );
  return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
  );
}

export default App;
