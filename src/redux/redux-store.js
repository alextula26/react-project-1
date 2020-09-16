import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import usersReducer from "./usersReduser";
import authReducer from "./authReduser";

const redusers = combineReducers({
  dialogs: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(redusers);

export default store;
