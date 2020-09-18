import API from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const IS_LOADER = 'IS_LOADER';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  maxCountUsers: 0,
  sizePage: 6,
  currentPage: 1,
  isLoader: false,
  folowingInProgress: [],
};

const updateUserFollow = (state = initialState, userId, bool) => (
  {
    ...state,
    users: state.users.map((user) => {
      if (user.id === userId) {
        return {...user, followed: bool}
      }
      return user;
    }),
  }
);

const usersReducer = (state = initialState, action) => {

  if (action.type === FOLLOW) {
    return updateUserFollow(state, action.userId, true);
  }

  if (action.type === UNFOLLOW) {
    return updateUserFollow(state, action.userId, false);
  }

  if (action.type === SET_USERS) {
    return {...state, users: action.users};
  }

  if (action.type === SET_CURRENT_PAGE) {
    return {...state, currentPage: action.page};
  }

  if (action.type === SET_USERS_TOTAL_COUNT) {
    return {...state, maxCountUsers: action.count};
  }

  if (action.type === IS_LOADER) {
    return {...state, isLoader: action.isLoader};
  }
  if (action.type === FOLLOWING_PROGRESS) {
    return {
      ...state,
      folowingInProgress: action.isFolowing
        ? [...state.folowingInProgress, action.userId]
        : [state.folowingInProgress.filter((id) => id !== action.userId)]
    };
  }

  return state;
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const isLoaderChanged = (isLoader) => ({type: IS_LOADER, isLoader});
export const folowingInProgressChanged = (isFolowing, userId) => ({type: FOLLOWING_PROGRESS, isFolowing, userId});

export const getUsers = (currentPage, sizePage) => (dispatch) => {
  dispatch(isLoaderChanged(true));
  API.getUsers(currentPage, sizePage).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
    dispatch(isLoaderChanged(false));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(folowingInProgressChanged(true, userId));
  API.setFollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(folowingInProgressChanged(false, userId));
  });
};
export const unfollow = (userId) => (dispatch) => {
  dispatch(folowingInProgressChanged(true, userId));
  API.deleteFollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(folowingInProgressChanged(false, userId));
  });
};

export default usersReducer;
