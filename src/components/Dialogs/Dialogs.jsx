import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = ({ dialogs, messages }) => {
  const dialogsList = dialogs.map(({id, name}) => <Dialog id={id} name={name}/>);
  const messagesList = messages.map(({id, text}) => <Message id={id} text={text}/>);
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsList}
      </div>
      <div className={style.messages}>
        {messagesList}
      </div>
    </div>
  )
};

export default Dialogs;
