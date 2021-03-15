import React from "react";
// import { Provider } from "react-redux";
// import logo from './logo.svg';
// import store from "./store/redux";

// import InboxScreen from './components/inboxScreen/InboxScreen';
// import logo from './logo.svg';
import './App.css';
// @ts-ignore
import {XFStoryBookDemoTask} from "xf-storybook-demo-task";
import TsxTasx from "./components/tsxtask/TsxTask";

function App() {
  const task = {
    id:'1',
    title:'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(),
  };
  return (
    <div className="App">
      {/*<header className="App-header">
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
      </header>*/}
      <body>
      <XFStoryBookDemoTask
        task={task}
        onArchiveTask={()=>{
          console.log(`on archive task,id is - `);
        }}
        onPinTask={() => {
          console.log(`on pin task,id is - `);
        }}
      />
      <TsxTasx
        task={task}
        onArchiveTask={(id)=>{
          console.log(`on archive task,id is - ${id}`);
        }}
        onPinTask={(id) => {
          console.log(`on pin task,id is - ${id}`);
        }}
      />
      </body>
    </div>
  );
}

export default App;
