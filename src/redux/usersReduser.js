const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {id: 1, photo: 'https://wpapers.ru/wallpapers/animals/Cats/1870/download/1600x1200_Два-очаровательных-котенка.jpg', fullName: 'Alex', status: 'I am Alex', location: {country: 'Russia', city: 'Moscow'}, follow: true},
    {id: 2, photo: 'https://wpapers.ru/wallpapers/animals/Cats/1870/download/1600x1200_Два-очаровательных-котенка.jpg', fullName: 'Irina', status: 'I am Irina', location: {country: 'Belarus', city: 'Minsk'}, follow: false},
    {id: 3, photo: 'https://wpapers.ru/wallpapers/animals/Cats/1870/download/1600x1200_Два-очаровательных-котенка.jpg', fullName: 'Sergy', status: 'I am Sergy', location: {country: 'Ukraine', city: 'Kiev'}, follow: true},
  ],
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