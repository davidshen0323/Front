import axios from 'axios';

const userRequest = axios.create({
    baseURL: 'https://api/user/'
  });

export const apiUserLogin = data => userRequest.post('/signIn', data);
export const apiUserLogout = data => userRequest.post('/signOut', data);
export const apiUserSignUp = data => userRequest.post('/signUp', data);