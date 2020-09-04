import _ from 'lodash';

const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';

const initialState = {
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
};

const addPost = (state) => {
  const ids = _.map(state.posts, (item) => item.id);
  const id = _.last(ids) + 1;

  const data = {
    id,
    name: state.postForm.name,
    age: state.postForm.age,
    message: state.postForm.message,
    like: 0,
  };

  state.posts.push(data);

  state.postForm.name = '';
  state.postForm.age = '';
  state.postForm.message = '';
};

const updateChangePost = (state, {name, age, message}) => {
  state.postForm.name = name;
  state.postForm.age = age;
  state.postForm.message = message;
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    addPost(state);
  }

  if (action.type === UPDATE_CHANGE_POST) {
    updateChangePost(state, action);
  }

  return state;
};

export default profileReducer;