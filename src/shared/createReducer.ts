import { IAction, IInitialState } from '../dtos';

export const createReducer =
  (initialState: IInitialState, reducer: any) =>
  (state = initialState, action: IAction) =>
    reducer(state, action) || state;
