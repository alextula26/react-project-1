import _ from 'lodash';

const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

export const addPostCreator = () => ({ type: ADD_POST });
export const updateChangePostCreator = (name, age, message) => (
  { type: UPDATE_CHANGE_POST, name, age, message }
);
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateChangeMessageCreator = (message) => ({type: UPDATE_CHANGE_MESSAGE, message})

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


  _addPost() {
    const ids = _.map(this._state.profile.posts, (item) => item.id);
    const id = _.last(ids) + 1;

    const data = {
      id,
      name: this._state.profile.postForm.name,
      age: this._state.profile.postForm.age,
      message: this._state.profile.postForm.message,
      like: 0,
    };

    this._state.profile.posts.push(data);

    this._state.profile.postForm.name = '';
    this._state.profile.postForm.age = '';
    this._state.profile.postForm.message = '';

    this._callObserver(this._state);
  },

  _updateChangePost(name, age, message) {
    this._state.profile.postForm.name = name;
    this._state.profile.postForm.age = age;
    this._state.profile.postForm.message = message;

    this._callObserver(this._state);
  },

  _addMessage() {
    const ids = _.map(this._state.dialogs.messages, (item) => item.id);
    const id = _.last(ids) + 1;
    const data = {
      id,
      message: this._state.dialogs.messageForm.message,
    };

    this._state.dialogs.messages.push(data);
    this._state.dialogs.messageForm.message = '';

    this._callObserver(this._state);
  },

  _updateChangeMessage(message) {
    this._state.dialogs.messageForm.message = message;

    this._callObserver(this._state);
  },

  dispatch(action) {
    const propertyAction = [
      {
        type: ADD_POST,
        fn: () => this._addPost(),
      },
      {
        type: UPDATE_CHANGE_POST,
        fn: () => this._updateChangePost(action.name, action.age, action.message),
      },
      {
        type: ADD_MESSAGE,
        fn: () => this._addMessage(),
      },
      {
        type: UPDATE_CHANGE_MESSAGE,
        fn: () => this._updateChangeMessage(action.message),
      },
    ];

    const { fn } = propertyAction.find(({ type }) => type === action.type);
    fn();
  }
};

export default store;

