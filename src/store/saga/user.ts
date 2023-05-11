// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { constants } from "../modules/user";
import { userService } from "../../services/user";
import { IAction } from "../../dtos";

function* getAllUsers(action: IAction): SagaIterator {
  try {
    const payload = yield call(userService.findAll);

    yield put({ type: constants.GET_ALL_USERS.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ALL_USERS.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getUserById(action: IAction): SagaIterator {
  try {
    const payload = yield call(userService.findById, action.id);
    yield put({ type: constants.GET_USER_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_USER_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* createUser(action: IAction): SagaIterator {
  try {
    const payload = yield call(userService.create, action.data);
    yield put({ type: constants.CREATE_USER.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.CREATE_USER.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* updateUser(action: IAction): SagaIterator {
  try {
    const payload = yield call(userService.update, action.data);
    yield put({ type: constants.UPDATE_USER.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.UPDATE_USER.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* deleteUser(action: IAction): SagaIterator {
  try {
    const payload = yield call(userService.remove, action.id);
    yield put({ type: constants.DELETE_USER.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.DELETE_USER.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* watchGetAllUsers() {
  yield takeLatest(constants.GET_ALL_USERS.ACTION, getAllUsers);
}

function* watchGetUserById() {
  yield takeLatest(constants.GET_USER_BY_ID.ACTION, getUserById);
}

function* watchCreateUser() {
  yield takeLatest(constants.CREATE_USER.ACTION, createUser);
}

function* watchUpdateUser() {
  yield takeLatest(constants.UPDATE_USER.ACTION, updateUser);
}

function* watchDeleteUser() {
  yield takeLatest(constants.DELETE_USER.ACTION, deleteUser);
}

export function* rootSaga() {
  yield all([
    fork(watchGetAllUsers),
    fork(watchGetUserById),
    fork(watchCreateUser),
    fork(watchUpdateUser),
    fork(watchDeleteUser),
  ]);
}
