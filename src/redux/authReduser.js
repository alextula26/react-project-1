import API from "../api/api";

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
    return {...state, ...action.data};
  }

  if (action.type === IS_LOADER) {
    return {...state, isAuth: true, isLoader: action.isLoader};
  }

  return state;
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const isLoaderChanged = (isLoader) => ({type: IS_LOADER, isLoader});

export const getAuth = () => (dispatch) => {
  dispatch(isLoaderChanged(true));
  API.auth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
    }
    dispatch(isLoaderChanged(false));
  });
};

export default authReducer;
