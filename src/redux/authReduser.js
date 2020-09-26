import API from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {

  if (action.type === SET_USER_DATA) {
    return {...state, ...action.payload};
  }

  return state;
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
});

export const getAuth = () => (dispatch) => {
  return API.auth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
    }
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
  API.logout().then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
