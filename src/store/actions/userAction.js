import * as types from '../actionTypes/usersTypes';

export const getUsers = () => ({
    type: types.GET_USERS,
});

export const getUsersSuccess = (users) => ({
    type: types.GET_USERS_SUCCESS,
    payload: users,
});
  
export const getUsersError = (error) => ({
    type: types.GET_USERS_ERROR,
    payload: error,
});


export const createUser = (newUser) => ({
  type: types.CREATE_USER,
  payload: newUser,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const showUser = (singleUser) => ({
  type: types.SHOW_USER,
  payload: singleUser,
});

export const showUserSuccess = (singleUser) => ({
  type: types.SHOW_USER_SUCCESS,
  payload: singleUser,
});

export const showUserError = (error) => ({
  type: types.SHOW_USER_ERROR,
  payload: error,
});
 
export const updateUser = (newUser) => ({
  type: types.UPDATE_USER,
  payload:newUser,
});

export const updateUserSuccess = (newUser) => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: newUser,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

export const deleteUser = (user) => ({
  type: types.DELETE_USER,
  payload: user,
});

export const deleteUserSuccess = (user) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: user,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

export const adminLogin = (user) => ({
  type: types.ADMIN_LOGIN,
  payload: user,
});

export const adminLoginSuccess = (loginData) => ({
  type: types.ADMIN_LOGIN_SUCCESS,
  payload: loginData,
});

export const adminLoginError = (error) => ({
  type: types.ADMIN_LOGIN_ERROR,
  payload: error,
});

export const adminLogout = () => ({
  type: types.ADMIN_LOGOUT,
});

export const adminLogoutSuccess = (loginData) => ({
  type: types.ADMIN_LOGOUT_SUCCESS,
  payload: loginData,
});

export const adminLogoutError = (error) => ({
  type: types.ADMIN_LOGOUT_ERROR,
  payload: error,
});