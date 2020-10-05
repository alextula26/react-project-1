import * as axios from 'axios/index';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '799f312a-7f6e-46f0-84df-18199856dcd1',
  },
});

const API = {
  getUsers: (currentPage, sizePage) => (
    instance.get(`users?page=${currentPage}&count=${sizePage}`).then((responce) => responce.data)
  ),
  getUser: (userId) => (
    instance.get(`profile/${userId}`).then((responce) => responce.data)
  ),
  deleteFollow: (userId) => (
    instance.delete(`follow/${userId}`).then((responce) => responce.data)
  ),
  setFollow: (userId) => (
    instance.post(`follow/${userId}`, {}).then((responce) => responce.data)
  ),
  auth: () => (
    instance.get('auth/me').then((responce) => responce.data)
  ),
  getStatus: (userId) => (
    instance.get(`profile/status/${userId}`)
  ),
  updateStatus: (status) => (
    instance.put('profile/status', { status })
  ),
  login: (email, password, rememberMe = false) => (
    instance.post('/auth/login', { email, password, rememberMe })
  ),
  logout: () => (
    instance.delete('/auth/login')
  ),
};

export default API;
