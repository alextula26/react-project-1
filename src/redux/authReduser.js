import API from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const IS_LOADER = 'IS_LOADER';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoader: false,
};

const authReducer = (state = initialState, action) => {

  if (action.type === SET_USER_DATA) {
    return {...state, ...action.payload};
  }

  if (action.type === IS_LOADER) {
    return {...state, isLoader: action.isLoader};
  }

  return state;
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
});
const isLoaderChanged = (isLoader) => ({type: IS_LOADER, isLoader});

export const getAuth = () => (dispatch) => {
  dispatch(isLoaderChanged(true));
  API.auth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
    }
    dispatch(isLoaderChanged(false));
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  API.login(email, password, rememberMe).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(getAuth());
    } else {
      const messages = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Wrong error';
      dispatch(stopSubmit('login', {_error: messages}));
    }
  });
};

export const logout = () => (dispatch) => {
  dispatch(isLoaderChanged(true));
  API.logout().then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
    dispatch(isLoaderChanged(false));
  });
};

export default authReducer;
