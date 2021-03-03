import React from "react";
import { Provider } from "react-redux";

import store from "./store/redux";

import InboxScreen from './components/inboxScreen/InboxScreen';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
  );
}

export default App;
