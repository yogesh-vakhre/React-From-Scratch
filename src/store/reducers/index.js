// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from "redux";

// Reducers
import users from "./usersReducer";
export default combineReducers({
  // Here you can registering another reducers.
  users,
});
