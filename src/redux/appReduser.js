import {getAuth} from "./authReduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: null,
};

const appReducer = (state = initialState, action) => {

  if (action.type === INITIALIZED_SUCCESS) {
    return {...state, initialized: true};
  }

  return state;
};

const initializedSucccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuth());
  Promise.all([promise]).then(() => {
    dispatch(initializedSucccess());
  });
};

export default appReducer;
