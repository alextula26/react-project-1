import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";

const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

export const addPostCreator = () => ({ type: ADD_POST });
export const updateChangePostCreator = (name, age, message) => (
  { type: UPDATE_CHANGE_POST, name, age, message }
);
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateChangeMessageCreator = (message) => ({type: UPDATE_CHANGE_MESSAGE, message});

const store = {
  _state: {
    dialogs: {
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
    },
    profile: {
      posts: [
        {id: 1, name: 'Alex', age: 30, message: 'How do you do?', like: 20},
        {id: 2, name: 'Inna', age: 35, message: 'Cool!!!', like: 30},
        {id: 3, name: 'Eva', age: 15, message: 'Way Cool!!!', like: 120},
      ],
      postForm: {
        name: '',
        age: '',
        message: '',
      },
    },
  },
  _callObserver() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callObserver = observer;
  },

  dispatch(action) {
    //console.log(dialogsReducer(this._state.dialogs, action));
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.profile = profileReducer(this._state.profile, action);
    this._callObserver(this._state);
  }
};

export default store;

