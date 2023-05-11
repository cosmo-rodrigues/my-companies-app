import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";
import { IAction, IInitialState, IAddress } from "../../dtos";

export const constants = {
  GET_ALL_ADDRESSES: createSagaAction("GET_ALL_ADDRESSES"),
  GET_ADDRESS_BY_ID: createSagaAction("GET_ADDRESS_BY_ID"),
  CREATE_ADDRESS: createSagaAction("CREATE_ADDRESS"),
  UPDATE_ADDRESS: createSagaAction("UPDATE_ADDRESS"),
  DELETE_ADDRESS: createSagaAction("DELETE_ADDRESS"),
};

export const actions = {
  getAllAddress: (next: () => void) => ({
    type: constants.GET_ALL_ADDRESSES.ACTION,
    next,
  }),
  getAddressById: (id: number, next: () => void) => ({
    type: constants.GET_ADDRESS_BY_ID.ACTION,
    id,
    next,
  }),
  createAddress: (data: IAddress, next: () => void) => ({
    type: constants.CREATE_ADDRESS.ACTION,
    data,
    next,
  }),
  updateAddress: (data: IAddress, next: () => void) => ({
    type: constants.UPDATE_ADDRESS.ACTION,
    data,
    next,
  }),
  deleteAddress: (id: number, next: () => void) => ({
    type: constants.DELETE_ADDRESS.ACTION,
    id,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.GET_ALL_ADDRESSES.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ALL_ADDRESSES.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ALL_ADDRESSES.FAILED]: (
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

  [constants.GET_ADDRESS_BY_ID.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ADDRESS_BY_ID.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ADDRESS_BY_ID.FAILED]: (
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

  [constants.CREATE_ADDRESS.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.CREATE_ADDRESS.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.CREATE_ADDRESS.FAILED]: (
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

  [constants.DELETE_ADDRESS.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.DELETE_ADDRESS.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.DELETE_ADDRESS.FAILED]: (
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

  [constants.UPDATE_ADDRESS.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.UPDATE_ADDRESS.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.UPDATE_ADDRESS.FAILED]: (
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
