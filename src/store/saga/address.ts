// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { constants } from "../modules/address";
import { addressService } from "../../services/address";
import { IAction } from "../../dtos";

function* getAllAddresses(action: IAction): SagaIterator {
  try {
    const payload = yield call(addressService.findAll);

    yield put({ type: constants.GET_ALL_ADDRESSES.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ALL_ADDRESSES.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getAddressById(action: IAction): SagaIterator {
  try {
    const payload = yield call(addressService.findById, action.id);
    yield put({ type: constants.GET_ADDRESS_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ADDRESS_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* createAddress(action: IAction): SagaIterator {
  try {
    const payload = yield call(addressService.create, action.data);
    yield put({ type: constants.CREATE_ADDRESS.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.CREATE_ADDRESS.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* updateAddress(action: IAction): SagaIterator {
  try {
    const payload = yield call(addressService.update, action.data);
    yield put({ type: constants.UPDATE_ADDRESS.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.UPDATE_ADDRESS.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* deleteAddress(action: IAction): SagaIterator {
  try {
    const payload = yield call(addressService.remove, action.id);
    yield put({ type: constants.DELETE_ADDRESS.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.DELETE_ADDRESS.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* watchGetAllAddress() {
  yield takeLatest(constants.GET_ALL_ADDRESSES.ACTION, getAllAddresses);
}

function* watchGetAddressById() {
  yield takeLatest(constants.GET_ADDRESS_BY_ID.ACTION, getAddressById);
}

function* watchCreateAddress() {
  yield takeLatest(constants.CREATE_ADDRESS.ACTION, createAddress);
}

function* watchUpdateAddress() {
  yield takeLatest(constants.UPDATE_ADDRESS.ACTION, updateAddress);
}

function* watchDeleteAddress() {
  yield takeLatest(constants.DELETE_ADDRESS.ACTION, deleteAddress);
}

export function* rootSaga() {
  yield all([
    fork(watchGetAllAddress),
    fork(watchGetAddressById),
    fork(watchCreateAddress),
    fork(watchUpdateAddress),
    fork(watchDeleteAddress),
  ]);
}
