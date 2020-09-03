import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageCreator, updateChangeMessageCreator} from "../../store";

const getUsersList = (users) => users.map(({id, name}) => (
    <Dialog key={id} id={id} name={name}/>
  )
);

const getMessagesList = (messages) => messages.map(({id, message}) => (
    <Message key={id} id={id} message={message}/>
  )
);

const Dialogs = ({ users, messages, messageForm, dispatch }) => {
  const usersList = getUsersList(users);
  const messagesList = getMessagesList(messages);
  const message = React.createRef();

  const setMessage = () => {
    dispatch(addMessageCreator());
    dispatch(updateChangeMessageCreator(''));
  };

  const onChangeMessage = () => {
    dispatch(updateChangeMessageCreator(message.current.value));
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
          <div><textarea ref={message} value={messageForm.message} onChange={onChangeMessage}/></div>
          <div>
            <button onClick={setMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
