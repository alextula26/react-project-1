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
  login: (email, password, rememberMe = false, captcha = null) => (
    instance.post('/auth/login', {
      email, password, rememberMe, captcha,
    })
  ),
  logout: () => (
    instance.delete('/auth/login')
  ),
  savePhoto: (photoFile) => {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('/profile/photo', formData, {
      headers:
      {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile: (profile) => (
    instance.put('profile', profile)
  ),
  getCaptchaUrl: () => (
    instance.get('security/get-captcha-url')
  ),
};

export default API;
