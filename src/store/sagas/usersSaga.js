// Import the redux-saga/effects
import { put, call, takeLatest, fork, all } from "redux-saga/effects";
import {
  adminLoginError,
  adminLoginSuccess,
  adminLogoutError,
  adminLogoutSuccess,
  createUserError,
  createUserSuccess,
  deleteUserError,
  deleteUserSuccess,
  getUsersError,
  getUsersSuccess,
  showUserError,
  showUserSuccess,
  updateUserError,
  updateUserSuccess,
} from "../actions/userAction";

// Import all actions and api's
import {
  GET_USERS,
  SHOW_USER,
  UPDATE_USER,
  CLEAR_USER,
  CREATE_USER,
  DELETE_USER,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
} from "../actionTypes/usersTypes";

import * as usersServices from "../services/usersServices";

// Here's the unique part, generator function*, function with asterisk(*)

// Get Users
function* getUsersAsync() {
  try {
    const response = yield call(usersServices.getAll);
    // console.log(response);
    if (response.status === 200) {
      yield put(getUsersSuccess(response.postData));
    } else {
      console.error(response.postData);
      yield put(getUsersError(response.data));
    }
  } catch (error) {
    console.error(error.response);
    yield put(getUsersError(error.response));
  }
}

// Create User
function* createUserAsync({ payload }) {
  try {
    const response = yield call(usersServices.create, payload);

    if (response.status === 200) {
      yield put(createUserSuccess(payload));
      // Clear Todo after creating
      yield put({ type: CLEAR_USER });
    } else {
      console.error(response.data);
      yield put(createUserError(response.data.errors));
    }
  } catch (error) {
    console.error(error.response);
    yield put(createUserError(error.response));
  }
}

// Get Single User
function* showUserAsync({ payload }) {
  try {
    const response = yield call(usersServices.show, payload);
    if (response.status === 200) {
      yield put(showUserSuccess(response.postData));
    } else {
      console.error(response.data);
      yield put(showUserSuccess(response.data));
    }
  } catch (error) {
    console.error(error.response);
    yield put(showUserError(error.response));
  }
}

// update User
function* updateUserAsync({ payload }) {
  try {
    //console.log(payload);
    const response = yield call(usersServices.update, payload);
    //console.error('saga call',response);
    if (response.status === 200) {
      yield put(updateUserSuccess(payload));
    } else {
      console.error(response.data);
      yield put(updateUserError(response.data));
    }
  } catch (error) {
    console.error(error);
    yield put(updateUserError(error.response));
  }
}

// Delete User
function* deleteUserAsync({ payload }) {
  try {
    const response = yield call(usersServices.destory, payload);
    //console.log(response);
    if (response.status === 200) {
      yield put(deleteUserSuccess(response.userData));
    } else {
      console.error(response.data);
      yield put(deleteUserError(response.data));
    }
  } catch (error) {
    console.error(error.response);
    yield put(deleteUserError(error.response));
  }
}

// login User
function* adminLoginAsync({ payload }) {
  try {
    const response = yield call(usersServices.adminLogin, payload);
    if (response.status === 200) {
      localStorage.setItem("ADMIN", JSON.stringify(response.data.token));
      console.log(response.data);
      yield put(adminLoginSuccess(response.data));
      // Clear Todo after creating
      yield put({ type: CLEAR_USER });
    } else {
      console.error(response.data);
      yield put(adminLoginError(response.data));
    }
  } catch (error) {
    console.error(error.response);
    yield put(adminLoginError(error.response));
  }
}

// logout User
function* adminLogoutAsync() {
  try {
    const response = yield call(usersServices.adminLogout);

    if (response.status === 200) {
      localStorage.removeItem("ADMIN");
      yield put(adminLogoutSuccess(response.data));
      // Clear Todo after creating
      yield put({ type: CLEAR_USER });
    } else {
      console.error(response.data);
      yield put(adminLogoutError(response.data.errors));
    }
  } catch (error) {
    console.error(error.response);
    yield put(adminLogoutError(error.response));
  }
}

export function* getUsers() {
  yield takeLatest(GET_USERS, getUsersAsync);
}

export function* showUser() {
  yield takeLatest(SHOW_USER, showUserAsync);
}

export function* createUser() {
  yield takeLatest(CREATE_USER, createUserAsync);
}

export function* updateUser() {
  yield takeLatest(UPDATE_USER, updateUserAsync);
}

export function* deleteUser() {
  yield takeLatest(DELETE_USER, deleteUserAsync);
}

export function* adminLogin() {
  yield takeLatest(ADMIN_LOGIN, adminLoginAsync);
}

export function* adminLogout() {
  yield takeLatest(ADMIN_LOGOUT, adminLogoutAsync);
}
const userSagas = [
  fork(getUsers),
  fork(showUser),
  fork(createUser),
  fork(updateUser),
  fork(deleteUser),
  fork(adminLogin),
  fork(adminLogout),
];

export default function* userSaga() {
  yield all([...userSagas]);
}
// Export the saga (User-saga)
/*export default function* UserSaga() {
  yield takeEvery(GET_USERS, getUsers);
  yield takeLatest(CREATE_USER, createUser);
  yield takeLatest(SHOW_USER, showUser);
  yield takeLatest(UPDATE_USER, updateUser);
  yield takeEvery(DELETE_USER, deleteUser);
}*/
