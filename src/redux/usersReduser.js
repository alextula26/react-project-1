const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
};

const updateUserFollow = (state, userId, bool) => (
  {
    ...state,
    users: state.users.map((user) => {
      if (user.id === userId) {
        return {...user, follow: bool}
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
    return {...state, users: [...state.users, ...action.users]};
  }

  return state;
};

export default usersReducer;