import API from "../api/api";
import _ from 'lodash';

const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  profile: null,
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
  status: '',
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

  return {
    ...state,
    posts: [...state.posts, data],
    postForm: {
      name: '',
      age: '',
      message: '',
    },
  }
};

const updateChangePost = (state, {name, age, message}) => ({
  ...state,
  postForm: {name, age, message},
});

const profileReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    return addPost(state);
  }

  if (action.type === UPDATE_CHANGE_POST) {
    return updateChangePost(state, action);
  }

  if (action.type === SET_USER_PROFILE) {
    return {...state, profile: action.profile};
  }

  if (action.type === SET_STATUS) {
    return {...state, status: action.status};
  }

  return state;
};
export const setPost = () => ({type: ADD_POST});
export const changePost = (name, age, message) => ({type: UPDATE_CHANGE_POST, name, age, message});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatusProfile = (status) => ({type: SET_STATUS, status});

export const getUser = (userId) => (dispatch) => {
  API.getUser(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  API.getStatus(userId).then((responce) => {
    dispatch(setStatusProfile(responce.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  API.updateStatus(status).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setStatusProfile(status));
    }
  });
};

export default profileReducer;
