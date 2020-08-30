import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import {addPost} from "./state";

export default (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}