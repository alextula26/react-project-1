import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App key="app"/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.store = store;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
