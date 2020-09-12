const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const addPostCreator = () => ({ type: ADD_POST });
export const updateChangePostCreator = (name, age, message) => (
  { type: UPDATE_CHANGE_POST, name, age, message }
);
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateChangeMessageCreator = (message) => ({type: UPDATE_CHANGE_MESSAGE, message});

export const followCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users});

