import _ from 'lodash';
import render from "./render";

export const addPost = () => {

  const ids = _.map(state.posts, (item) => item.id);
  const id = _.last(ids) + 1;

  const data = {
    id,
    name: state.profile.postForm.name,
    age: state.profile.postForm.age,
    message: state.profile.postForm.message,
    like: 0,
  };

  state.profile.posts.push(data);

  state.profile.postForm.name = '';
  state.profile.postForm.age = '';
  state.profile.postForm.message = '';

  render(state);
};

export const updateChangePost = (name, age, message) => {

  state.profile.postForm.name = name;
  state.profile.postForm.age = age;
  state.profile.postForm.message = message;

  render(state);
};

const state = {
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
};

export default state;

