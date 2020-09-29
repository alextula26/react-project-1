import API from "../api/api";
import _ from 'lodash';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  profile: null,
  posts: [
    {id: 1, name: 'Alex', age: 30, message: 'How do you do?', like: 20},
    {id: 2, name: 'Inna', age: 35, message: 'Cool!!!', like: 30},
    {id: 3, name: 'Eva', age: 15, message: 'Way Cool!!!', like: 120},
  ],
  status: '',
};

const addPost = (state, {name, age, message}) => {
  const ids = _.map(state.posts, (item) => item.id);
  const id = _.last(ids) + 1;

  const data = {
    id,
    name,
    age,
    message,
    like: 0,
  };

  return {
    ...state,
    posts: [...state.posts, data],
  }
};

const profileReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    return addPost(state, action);
  }

  if (action.type === SET_USER_PROFILE) {
    return {...state, profile: action.profile};
  }

  if (action.type === SET_STATUS) {
    return {...state, status: action.status};
  }

  return state;
};
export const setPost = (name, age, message) => ({type: ADD_POST, name, age, message});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatusProfile = (status) => ({type: SET_STATUS, status});

export const getUser = (userId) => async (dispatch) => {
  const data = await API.getUser(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const responce = await API.getStatus(userId);
  dispatch(setStatusProfile(responce.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const responce = await API.updateStatus(status);
  if (responce.data.resultCode === 0) {
    dispatch(setStatusProfile(status));
  }
};

export default profileReducer;
