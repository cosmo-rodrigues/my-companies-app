import { all, fork } from "redux-saga/effects";

import { rootSaga as address } from "./address";
import { rootSaga as company } from "./company";
import { rootSaga as user } from "./user";

export function* rootSaga() {
  yield all([fork(address), fork(company), fork(user)]);
}
