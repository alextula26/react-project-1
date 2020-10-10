import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';

const Dialog = (props) => (
  <div className={style.dialog}>
    <NavLink to={`/dialogs/${props.id}`} activeClassName={style.active}>{props.name}</NavLink>
  </div>
);

export default Dialog;
