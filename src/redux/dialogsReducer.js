import _ from 'lodash';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

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
  messageForm: {
    message: '',
  },
};

const addMessage = (state) => {
  const ids = _.map(state.messages, (item) => item.id);
  const id = _.last(ids) + 1;
  const data = {
    id,
    message: state.messageForm.message,
  };

  return {
    ...state,
    messages: [...state.messages, data],
    messageForm: {message: '',},
  }
};

const updateChangeMessage = (state, {message}) => ({
  ...state,
  messageForm: {message},
});

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    return addMessage(state);
  }

  if (action.type === UPDATE_CHANGE_MESSAGE) {
    return updateChangeMessage(state, action);
  }

  return state;
};

export const setMessage = () => ({type: ADD_MESSAGE});
export const changeMessage = (message) => ({type: UPDATE_CHANGE_MESSAGE, message});

export default dialogsReducer;