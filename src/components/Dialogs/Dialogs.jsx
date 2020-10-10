import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { TextareaComponent } from '../../FormControl/FormControl';
import { required, maxLength } from '../../FormControl/validators';

const getUsersList = (users) => users.map(({ id, name }) => (
  <Dialog key={id} id={id} name={name} />
));

const getMessagesList = (messages) => messages.map(({ id, message }) => (
  <Message key={id} id={id} message={message} />
));

const maxLength20 = maxLength(20);

const AddMessageForm = (props) => (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextareaComponent}
        name="message"
        placeholder="Add message"
        label="Add message"
        validate={[required, maxLength20]} />
      <div>
        <button>Add post</button>
      </div>
    </form>
);

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = ({ setMessage, dialogs, isAuth }) => {
  const { users, messages } = dialogs;

  const usersList = getUsersList(users);
  const messagesList = getMessagesList(messages);

  const onSubmit = (formData) => {
    setMessage(formData.message);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {usersList}
      </div>
      <div className={style.messages}>
        <div style={{ marginBottom: '10px' }}>
          {messagesList}
        </div>
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
