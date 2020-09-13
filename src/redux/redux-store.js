import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReduser";

const redusers = combineReducers({
  dialogs: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
});

const store = createStore(redusers);

export default store;
