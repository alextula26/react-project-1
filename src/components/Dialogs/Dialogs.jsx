import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const getDialogsList = (dialogs) => dialogs.map(({id, name}) => (
    <Dialog key={id} id={id} name={name}/>
  )
);

const getMessagesList = (messages) => messages.map(({id, text}) => (
    <Message key={id} id={id} text={text}/>
  )
);

const Dialogs = ({dialogs, messages}) => {
  const dialogsList = getDialogsList(dialogs);
  const messagesList = getMessagesList(messages);

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
