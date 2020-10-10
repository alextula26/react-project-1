import { stopSubmit } from 'redux-form';
import API from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    return { ...state, ...action.payload };
  }

  if (action.type === SET_CAPTCHA_URL) {
    return { ...state, captchaUrl: action.captchaUrl };
  }

  return state;
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId, email, login, isAuth,
  },
});

const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

const getCaptchaUrl = () => async (dispatch) => {
  const responce = await API.getCaptchaUrl();
  const captchaUrl = responce.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export const getAuth = () => async (dispatch) => {
  const data = await API.auth();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const responce = await API.login(email, password, rememberMe, captcha);
  if (responce.data.resultCode === 0) {
    dispatch(getAuth());
  } else {
    if (responce.data.resultCode === 10) {
      getCaptchaUrl();
    }

    const messages = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Wrong error';
    dispatch(stopSubmit('login', { _error: messages }));
  }
};

export const logout = () => async (dispatch) => {
  const responce = await API.logout();
  if (responce.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
