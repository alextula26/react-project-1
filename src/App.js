import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="content">
          <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
          <Route path='/profile' render={ () => <Profile /> }/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
