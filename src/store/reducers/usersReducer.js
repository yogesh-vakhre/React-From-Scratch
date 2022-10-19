import {
  GET_USERS,
  SHOW_USER,
  CREATE_USER,
  DELETE_USER,
  CLEAR_USER,
  UPDATE_USER,
  CREATE_USER_ERROR,
  DELETE_USER_ERROR,
  GET_USERS_ERROR,
  SHOW_USER_ERROR,
  UPDATE_USER_ERROR,
  GET_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  SHOW_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGOUT_ERROR,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGIN_SUCCESS,
} from "../actionTypes/usersTypes";

// Define your state here
const initialState = {
  users: [],
  user: [],
  error: [],
  loginData: [],
  loading: false,
};

// This export default will control your state for your application
const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get users
    case ADMIN_LOGIN:
    case ADMIN_LOGOUT:
    case GET_USERS:
    case SHOW_USER: // show user
    case UPDATE_USER: // update new user
    case CREATE_USER: // Create new user
    case DELETE_USER: // Delete existed user
      return {
        ...state,
        loading: true,
      };
    // Clear user title in form after creating a new one
    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };

    // sucesss
    case GET_USERS_SUCCESS:
      // console.log("reducers",{
      //   ...state,
      //   users: payload,
      //   loading: false,
      // });
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case SHOW_USER_SUCCESS:
      // console.log('reducers', {
      //   ...state,
      //   user: payload,
      //   loading: false,
      // });
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      //console.log("reducers", { type, payload });
      return {
        ...state,
        user: payload.data,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      // console.log("reducers", { type, payload });
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
        loading: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        loginData: payload,
      };
      case ADMIN_LOGOUT_SUCCESS:
        return {
          ...state,
          loading: true,
        };
    //error
    case GET_USERS_ERROR:
    case CREATE_USER_ERROR:
    case UPDATE_USER_ERROR:
    case SHOW_USER_ERROR:
    case DELETE_USER_ERROR:
    case ADMIN_LOGIN_ERROR:
    case ADMIN_LOGOUT_ERROR:
      //console.log("reducers", { type, payload });
      return {
        ...state,
        loading: false,
        error: payload,
      };
    // Return default state if you didn't match any case
    default:
      return state;
  }
};
export default reducers;
