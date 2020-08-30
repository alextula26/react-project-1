import _ from 'lodash';

export const addPost = (name, age, message) => {

  const ids = _.map(state.posts, (item) => item.id);
  const id = _.last(ids) + 1;

  const data = {
    id,
    name,
    age,
    message,
    like: 0,
  };

  state.posts.push(data);
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
  posts: [
    {id: 1, name: 'Alex', age: 30, message: 'How do you do?', like: 20},
    {id: 2, name: 'Inna', age: 35, message: 'Cool!!!', like: 30},
    {id: 3, name: 'Eva', age: 15, message: 'Way Cool!!!', like: 120},
  ]
};

export default state;

