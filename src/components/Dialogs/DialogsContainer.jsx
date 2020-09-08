import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageCreator, updateChangeMessageCreator} from "../../redux/store";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          console.log(store)
          const onSetMessage = () => {
            store.dispatch(addMessageCreator());
          };

          const onChangeMessage = (message) => {
            store.dispatch(updateChangeMessageCreator(message));
          };

          return <Dialogs changeMessage={onChangeMessage} setMessage={onSetMessage} dialogs={store.getState().dialogs}/>
        }
      }
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;
