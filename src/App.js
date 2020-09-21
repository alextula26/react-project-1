import React from 'react';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className="content">
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/login' render={() => <Login/>}/>
      </div>
    </div>
  );
};

export default App;
