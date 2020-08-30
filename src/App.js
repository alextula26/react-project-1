import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from "react-router-dom";

function App({ state, addPost }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="content">
          <Route path='/dialogs' render={ () => <Dialogs dialogs={state.dialogs} messages={state.messages} /> }/>
          <Route path='/profile' render={ () => <Profile posts={state.posts} addPost={addPost} /> }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
