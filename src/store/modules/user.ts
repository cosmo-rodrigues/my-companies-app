import { createSagaAction } from "../../shared/sagas";
import { createReducer } from "../../shared/createReducer";
import { IAction, IInitialState, IUserInfo } from "../../dtos";

export const constants = {
  GET_ALL_USERS: createSagaAction("GET_ALL_USERS"),
  GET_USER_BY_ID: createSagaAction("GET_USER_BY_ID"),
  CREATE_USER: createSagaAction("CREATE_USER"),
  UPDATE_USER: createSagaAction("UPDATE_USER"),
  DELETE_USER: createSagaAction("DELETE_USER"),
};

export const actions = {
  getAllUsers: (next: () => void) => ({
    type: constants.GET_ALL_USERS.ACTION,
    next,
  }),
  getUserById: (id: number, next: () => void) => ({
    type: constants.GET_USER_BY_ID.ACTION,
    id,
    next,
  }),
  createUser: (data: IUserInfo, next: () => void) => ({
    type: constants.CREATE_USER.ACTION,
    data,
    next,
  }),
  updateUser: (data: IUserInfo, next: () => void) => ({
    type: constants.UPDATE_USER.ACTION,
    data,
    next,
  }),
  deleteUser: (id: number, next: () => void) => ({
    type: constants.DELETE_USER.ACTION,
    id,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.GET_ALL_USERS.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_ALL_USERS.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_ALL_USERS.FAILED]: (
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

  [constants.GET_USER_BY_ID.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.GET_USER_BY_ID.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.GET_USER_BY_ID.FAILED]: (
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

  [constants.CREATE_USER.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.CREATE_USER.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.CREATE_USER.FAILED]: (
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

  [constants.DELETE_USER.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.DELETE_USER.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.DELETE_USER.FAILED]: (
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

  [constants.UPDATE_USER.ACTION]: (state: IInitialState) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.UPDATE_USER.SUCCESS]: (
    state: IInitialState,
    action: IAction
  ) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.UPDATE_USER.FAILED]: (
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
