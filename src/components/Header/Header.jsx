import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return <>
    <header className={style.header}>
      <div><img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt=""/></div>
      <div>
        {
          !props.auth.isAuth
            ? <NavLink style={{color: '#FFFFFF', textDecoration: 'none'}} to="/login">Login</NavLink>
            : <div>{props.auth.login} - <button onClick={props.logout}>Logout</button></div>
        }
      </div>
    </header>
  </>
};

export default Header;
