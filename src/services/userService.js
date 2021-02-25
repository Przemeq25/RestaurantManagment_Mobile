import axios from 'axios';
import {appUrl} from '../config/app.config';
import base64 from 'react-native-base64';

const login = (login, password) => {
  return axios.post(
    `${appUrl}/user-api/login`,
    {},
    {
      params: {
        grant_type: 'password',
        username: login,
        password: password,
      },
      headers: {
        "Authorization": "Basic " + base64.encode('app:1234')
      },
    },
  );
};
const refreshLogin = (refreshToken) => {
  return axios.post(
    `${appUrl}/user-api/login`,
    {},
    {
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      headers: {
        "Authorization": "Basic " + base64.encode('app:1234')
      },
    },
  );
};
const register = (email, login, password) => {
  return axios.post(`${appUrl}/user-api/register`, {
    email,
    password,
    login,
  });
};
const postPersonalData = (personalData, login) => {
  const {
    forename,
    surname,
    city,
    street,
    postCode,
    houseNumber,
    phoneNumber,
  } = personalData;
  return axios.post(`${appUrl}/${login}/personal-data`, {
    forename,
    surname,
    city,
    street,
    postCode,
    houseNumber,
    phoneNumber,
  });
};
const getUserData = (token) => {
  return axios.get(`${appUrl}/resource-api/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
const getPersonalData = (token) => {
  return axios.get(`${appUrl}/user-api/me`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
const changePersonalData = (userData, token) => {
  return axios.put(`${appUrl}/user-api/me`, userData, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};
const activateAccount = (login, activationKey) => {
  return axios.post(`${appUrl}/user-api/active`, {
    login,
    activationKey,
  });
};
export const userService = {
  login,
  register,
  postPersonalData,
  getUserData,
  refreshLogin,
  activateAccount,
  getPersonalData,
  changePersonalData,
};
