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
  folowingInProgress: [2, 3],
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

export default usersReducer;
