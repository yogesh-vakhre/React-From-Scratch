import { all } from "redux-saga/effects";

// Sagas
import userSaga from "./usersSaga";

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!");

  yield all([userSaga() ]);
}
