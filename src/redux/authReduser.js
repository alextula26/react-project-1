import API from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const IS_LOADER = 'IS_LOADER';
const iS_AUTH = 'iS_AUTH';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoader: false,
};

const authReducer = (state = initialState, action) => {

  if (action.type === SET_USER_DATA) {
    return {...state, ...action.data};
  }

  if (action.type === IS_LOADER) {
    return {...state, isLoader: action.isLoader};
  }

  if (action.type === iS_AUTH) {
    return {...state, isAuth: action.isAuth};
  }

  return state;
};

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const isLoaderChanged = (isLoader) => ({type: IS_LOADER, isLoader});
const isAuthChanged = (isAuth) => ({type: iS_AUTH, isAuth});

export const getAuth = () => (dispatch) => {
  dispatch(isLoaderChanged(true));
  API.auth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
      dispatch(isAuthChanged(true));
    } else {
      dispatch(isAuthChanged(false));
    }
    dispatch(isLoaderChanged(false));
  });
};

export default authReducer;
