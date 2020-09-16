const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';

export const setPost = () => ({type: ADD_POST});
export const changePost = (name, age, message) => (
  {type: UPDATE_CHANGE_POST, name, age, message}
);

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

export const setMessage = () => ({type: ADD_MESSAGE});
export const changeMessage = (message) => ({type: UPDATE_CHANGE_MESSAGE, message});

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const IS_LOADER = 'IS_LOADER';

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const isLoaderChanged = (isLoader) => ({type: IS_LOADER, isLoader});

const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
