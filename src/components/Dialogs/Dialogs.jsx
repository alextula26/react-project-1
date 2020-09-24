import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const getUsersList = (users) => users.map(({id, name}) => (
    <Dialog key={id} id={id} name={name}/>
  )
);

const getMessagesList = (messages) => messages.map(({id, message}) => (
    <Message key={id} id={id} message={message}/>
  )
);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component="textarea" name="message" placeholder="Add message"/></div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = ({changeMessage, setMessage, dialogs, isAuth}) => {
  const {users, messages, messageForm} = dialogs;

  const usersList = getUsersList(users);
  const messagesList = getMessagesList(messages);

  /*const onSetMessage = () => {
    setMessage();
  };*/

  /*const onChangeMessage = (e) => {
    changeMessage(e.target.value);
  };*/

  const onSubmit = (formData) => {
    setMessage(formData.message);
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
        <AddMessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
};



export default Dialogs;
