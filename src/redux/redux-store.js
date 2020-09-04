import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import {combineReducers, createStore} from "redux";

const redusers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
});

const store = createStore(redusers);

export default store;
