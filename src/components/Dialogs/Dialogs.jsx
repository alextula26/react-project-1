import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => (
  <div className={style.dialogs}>
    <div className={style.dialogsItems}>
      <div className={`${style.dialogsItems} ${style.active}`}>Name1</div>
      <div className={style.dialog}>Name2</div>
      <div className={style.dialog}>Name3</div>
    </div>
    <div className={style.messages}>
      <div className={style.message}>Message1</div>
      <div className={style.message}>Message2</div>
      <div className={style.message}>Message3</div>
    </div>
  </div>
);

export default Dialogs;
