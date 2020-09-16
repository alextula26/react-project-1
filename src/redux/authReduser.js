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

export default authReducer;
