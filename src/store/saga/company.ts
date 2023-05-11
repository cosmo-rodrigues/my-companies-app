// @ts-nocheck
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { constants } from "../modules/company";
import { companyService } from "../../services/company";
import { IAction } from "../../dtos";

function* getAllCompany(action: IAction): SagaIterator {
  try {
    const payload = yield call(companyService.findAll);

    yield put({ type: constants.GET_ALL_COMPANY.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_ALL_COMPANY.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* getCompanyById(action: IAction): SagaIterator {
  try {
    const payload = yield call(companyService.findById, action.id);
    yield put({ type: constants.GET_COMPANY_BY_ID.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.GET_COMPANY_BY_ID.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* createCompany(action: IAction): SagaIterator {
  try {
    const payload = yield call(companyService.create, action.data);
    yield put({ type: constants.CREATE_COMPANY.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.CREATE_COMPANY.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* updateCompany(action: IAction): SagaIterator {
  try {
    const payload = yield call(companyService.update, action.data);
    yield put({ type: constants.UPDATE_COMPANY.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.UPDATE_COMPANY.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* deleteCompany(action: IAction): SagaIterator {
  try {
    const payload = yield call(companyService.remove, action.id);
    yield put({ type: constants.DELETE_COMPANY.SUCCESS, payload });
    action.next && action.next(payload);
  } catch (e) {
    yield put({
      type: constants.DELETE_COMPANY.FAILED,
      error: true,
      errorMessage: e,
    });
  }
}

function* watchGetAllCompany() {
  yield takeLatest(constants.GET_ALL_COMPANY.ACTION, getAllCompany);
}

function* watchGetCompanyById() {
  yield takeLatest(constants.GET_COMPANY_BY_ID.ACTION, getCompanyById);
}

function* watchCreateCompany() {
  yield takeLatest(constants.CREATE_COMPANY.ACTION, createCompany);
}

function* watchUpdateCompany() {
  yield takeLatest(constants.UPDATE_COMPANY.ACTION, updateCompany);
}

function* watchDeleteCompany() {
  yield takeLatest(constants.DELETE_COMPANY.ACTION, deleteCompany);
}

export function* rootSaga() {
  yield all([
    fork(watchGetAllCompany),
    fork(watchGetCompanyById),
    fork(watchCreateCompany),
    fork(watchUpdateCompany),
    fork(watchDeleteCompany),
  ]);
}
