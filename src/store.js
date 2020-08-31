import _ from 'lodash';

const store = {
  _state: {
    dialogs: [
      {id: 1, name: 'Name 1'},
      {id: 2, name: 'Name 2'},
      {id: 3, name: 'Name 3'},
      {id: 4, name: 'Name 4'},
    ],
    messages: [
      {id: 1, text: 'Message1'},
      {id: 2, text: 'Message2'},
      {id: 3, text: 'Message3'},
    ],
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

  getState() {
    return this._state;
  },

  _callObserver() {},

  addPost() {
    const ids = _.map(this._state.posts, (item) => item.id);
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

  updateChangePost (name, age, message) {

    this._state.profile.postForm.name = name;
    this._state.profile.postForm.age = age;
    this._state.profile.postForm.message = message;

    this._callObserver(this._state);
  },

  subscribe (observer) {
    this._callObserver = observer;
  }
};

export default store;

