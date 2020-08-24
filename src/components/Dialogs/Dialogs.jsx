import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const users = [
  {id: 1, name: 'Name 1'},
  {id: 2, name: 'Name 2'},
  {id: 3, name: 'Name 3'},
  {id: 4, name: 'Name 4'},
];

const messages = [
  {text: 'Message1'},
  {text: 'Message2'},
  {text: 'Message3'},
];

const Dialogs = () => {
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
