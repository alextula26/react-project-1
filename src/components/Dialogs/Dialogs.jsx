import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const getUsersList = (users) => users.map(({id, name}) => (
    <Dialog key={id} id={id} name={name}/>
  )
);

const getMessagesList = (messages) => messages.map(({id, message}) => (
    <Message key={id} id={id} message={message}/>
  )
);

const Dialogs = ({changeMessage, setMessage, dialogs}) => {
  const {users, messages, messageForm} = dialogs;

  const usersList = getUsersList(users);
  const messagesList = getMessagesList(messages);

  const onSetMessage = () => {
    setMessage();
  };

  const onChangeMessage = (e) => {
    changeMessage(e.target.value);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {usersList}
      </div>
      <div className={style.messages}>
        <div style={{marginBottom: `10px`}}>
          {messagesList}
        </div>
        <div>
          <div><textarea value={messageForm.message} onChange={onChangeMessage}/></div>
          <div>
            <button onClick={onSetMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
