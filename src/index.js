import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import state, {addPost, updateChangePost, subscribe} from "./state";
import * as serviceWorker from './serviceWorker';

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateChangePost={updateChangePost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(state);

subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
