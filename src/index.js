import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
  dialogs: {
    users: [
      {id: 1, name: 'Name 1'},
      {id: 2, name: 'Name 2'},
      {id: 3, name: 'Name 3'},
      {id: 4, name: 'Name 4'},
    ],
    messages: [
      {text: 'Message1'},
      {text: 'Message2'},
      {text: 'Message3'},
    ],
  },
  profile: {
    posts: [
      {name: 'Alex', age: 30, message: 'How do you do?', like: 20},
      {name: 'Inna', age: 35, message: 'Cool!!!', like: 30},
    ],
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
