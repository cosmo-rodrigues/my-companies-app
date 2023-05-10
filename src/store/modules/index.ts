import { combineReducers } from "redux";
import address from "./address";
import company from "./company";
import user from "./user";

export const rootReducers = combineReducers({ address, company, user });

export default {
  address,
  company,
  user,
};
