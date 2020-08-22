import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={`${style.dialogsItems} ${style.active}`}>
      Hello
    </div>
    <div className={style.dialogsItems}>
      Hello
    </div>
  </div>
);

export default Dialogs;
