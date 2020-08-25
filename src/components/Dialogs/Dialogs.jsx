import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = ({ dialogs }) => {
  const { users, messages } = dialogs;
  const userList = users.map(({id, name}) => <Dialog id={id} name={name}/>);
  const messageList = messages.map(({text}) => <Message text={text}/>);
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {userList}
      </div>
      <div className={style.messages}>
        {messageList}
      </div>
    </div>
  )
};

export default Dialogs;
