import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        key="app"
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(store.getState());

store.subscribe(() => render(store.getState()));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
