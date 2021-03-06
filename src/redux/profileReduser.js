import _ from 'lodash';
import { stopSubmit } from 'redux-form';
import API from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

const initialState = {
  profile: null,
  posts: [
    {
      id: 1, name: 'Alex', age: 30, message: 'How do you do?', like: 20,
    },
    {
      id: 2, name: 'Inna', age: 35, message: 'Cool!!!', like: 30,
    },
    {
      id: 3, name: 'Eva', age: 15, message: 'Way Cool!!!', like: 120,
    },
  ],
  status: '',
};

const addPost = (state, { name, age, message }) => {
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
  };
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return addPost(state, action);
  }

  if (action.type === SET_USER_PROFILE) {
    return { ...state, profile: action.profile };
  }

  if (action.type === SET_STATUS) {
    return { ...state, status: action.status };
  }

  if (action.type === SET_PHOTO) {
    return { ...state, profile: { ...state.profile, photos: action.photos } };
  }

  return state;
};

export const setPost = (name, age, message) => ({
  type: ADD_POST, name, age, message,
});
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatusProfile = (status) => ({ type: SET_STATUS, status });
const savePhotoSuccess = (photos) => ({ type: SET_PHOTO, photos });

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

export const savePhoto = (photo) => async (dispatch) => {
  const responce = await API.savePhoto(photo);
  if (responce.data.resultCode === 0) {
    dispatch(savePhotoSuccess(responce.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const responce = await API.saveProfile(profile);
  if (responce.data.resultCode === 0) {
    dispatch(getUser(userId));
  } else {
    const messages = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Wrong error';
    dispatch(stopSubmit('editProfileDataForm', { contacts: { facebook: messages } }));
    return Promise.reject(messages);
  }
};

export default profileReducer;
