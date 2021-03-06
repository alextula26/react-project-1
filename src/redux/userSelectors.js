import { createSelector } from 'reselect';

const getUsersSelector = (state) => state.usersPage.users;
export const getUsers = createSelector(getUsersSelector, (users) => users.filter(() => true));
export const getMaxCountUsers = (state) => state.usersPage.maxCountUsers;
export const getSizePage = (state) => state.usersPage.sizePage;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getFolowingInProgress = (state) => state.usersPage.folowingInProgress;
export const getIsLoader = (state) => state.usersPage.isLoader;
