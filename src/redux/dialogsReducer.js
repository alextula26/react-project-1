import _ from 'lodash';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

const addMessage = (state) => {
  const ids = _.map(state.messages, (item) => item.id);
  const id = _.last(ids) + 1;
  const data = {
    id,
    message: state.messageForm.message,
  };

  state.messages.push(data);
  state.messageForm.message = '';
};

const updateChangeMessage = (state, {message}) => {
  state.messageForm.message = message;
};

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    addMessage(state);
  }

  if (action.type === UPDATE_CHANGE_MESSAGE) {
    updateChangeMessage(state, action);
  }

  return state;
};

export default dialogsReducer;