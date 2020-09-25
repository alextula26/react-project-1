import _ from 'lodash';

const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  users: [
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
    {id: 3, name: 'Name 3'},
    {id: 4, name: 'Name 4'},
  ],
  messages: [
    {id: 1, message: 'Message1'},
    {id: 2, message: 'Message2'},
    {id: 3, message: 'Message3'},
  ],
};

const addMessage = (state, {message}) => {
  const ids = _.map(state.messages, (item) => item.id);
  const id = _.last(ids) + 1;
  const data = {
    id,
    message,
  };

  return {
    ...state,
    messages: [...state.messages, data],
  }
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    return addMessage(state, action);
  }

  return state;
};

export const setMessage = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;
