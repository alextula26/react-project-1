import React from 'react';
import style from './Message.module.css';

const Message = (props) => (
  <div className={style.message}>{props.text}</div>
);

export default Message;
