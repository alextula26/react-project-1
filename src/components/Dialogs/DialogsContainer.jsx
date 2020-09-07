import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreator, updateChangeMessageCreator} from "../../redux/store";

const DialogsContainer = ({ store }) => {
  const onSetMessage = () => {
    store.dispatch(addMessageCreator());
  };

  const onChangeMessage = (message) => {
    store.dispatch(updateChangeMessageCreator(message));
  };

  return (
    <Dialogs changeMessage={onChangeMessage} setMessage={onSetMessage} dialogs={store.getState().dialogs}/>
  )
};

export default DialogsContainer;
