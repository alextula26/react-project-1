import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import usersReducer from "./usersReduser";
import authReducer from "./authReduser";
import thunkMiddleware from 'redux-thunk';

const redusers = combineReducers({
  dialogs: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
