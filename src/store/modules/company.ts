import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";
import { IAction, IInitialState, ICompany } from "../../dtos";

export const constants = {
  GET_ALL_COMPANY: createSagaAction("GET_ALL_COMPANY"),
  GET_COMPANY_BY_ID: createSagaAction("GET_COMPANY_BY_ID"),
  CREATE_COMPANY: createSagaAction("CREATE_COMPANY"),
  UPDATE_COMPANY: createSagaAction("UPDATE_COMPANY"),
  DELETE_COMPANY: createSagaAction("DELETE_COMPANY"),
};

export const actions = {
  getAllCompany: (next: () => void) => ({
    type: constants.GET_ALL_COMPANY.ACTION,
    next,
  }),
  getCompanyById: (id: number, next: () => void) => ({
    type: constants.GET_COMPANY_BY_ID.ACTION,
    id,
    next,
  }),
  createCompany: (data: ICompany, next: () => void) => ({
    type: constants.CREATE_COMPANY.ACTION,
    data,
    next,
  }),
  updateCompany: (data: ICompany, next: () => void) => ({
    type: constants.UPDATE_COMPANY.ACTION,
    data,
    next,
  }),
  deleteCompany: (id: number, next: () => void) => ({
    type: constants.DELETE_COMPANY.ACTION,
    id,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.GET_ALL_COMPANY.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ALL_COMPANY.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ALL_COMPANY.FAILED]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.GET_COMPANY_BY_ID.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_COMPANY_BY_ID.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_COMPANY_BY_ID.FAILED]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.CREATE_COMPANY.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.CREATE_COMPANY.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.CREATE_COMPANY.FAILED]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.DELETE_COMPANY.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.DELETE_COMPANY.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.DELETE_COMPANY.FAILED]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },

  [constants.UPDATE_COMPANY.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.UPDATE_COMPANY.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.UPDATE_COMPANY.FAILED]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      error: true,
      errorMessage: action.errorMessage,
      isLoading: false,
    };
  },
};

export const initialState = {
  error: false,
  errorMessage: "",
  isLoading: false,
};

export default createReducer(
  initialState,
  (state: IInitialState, action: IAction) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : { ...state, isLoading: false };
  }
);
