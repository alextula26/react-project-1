import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import {addPost, updateChangePost} from "./state";

export default (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost }
        updateChangePost={updateChangePost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}