import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReduser";

const redusers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  users: usersReducer,
});

const store = createStore(redusers);

export default store;
