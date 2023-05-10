import { IUserCredentials, IUserInfo } from "../dtos";
import { post } from "./api";
import { ROLES } from "./constants";

const storageNames = [
  { name: "@MyCompanies/user", keyData: "user", isJson: true },
  { name: "@MyCompanies/token", keyData: "token", isJson: false },
];

const getUserAuthentication = () =>
  JSON.parse(localStorage.getItem("@MyCompanies/user") || "") as IUserInfo;

const isAdmin = () => checkCurrentUserRole(2);
const isUser = () => checkCurrentUserRole(1);

const checkCurrentUserRole = (sourceName: number) =>
  getUserAuthentication()?.typeUser === sourceName;

const signIn = (user: IUserCredentials) =>
  post({ type: "user", service: "/auth", data: user });

const signOut = () =>
  storageNames.forEach((item) => localStorage.removeItem(item.name));

const isLogged = () => (getUserAuthentication() ? true : false);

const getToken = () => localStorage.getItem("@MyCompanies/token");

const removeToken = () => localStorage.removeItem("@MyCompanies/token");

const isValidRoles = (currentUser: IUserInfo) => {
  Object.values(ROLES).some((routeRole: number) =>
    currentUser.typeUser === routeRole ? true : false
  );
};

export const loginService = {
  getUserAuthentication,
  getToken,
  isAdmin,
  isUser,
  isLogged,
  isValidRoles,
  removeToken,
  signIn,
  signOut,
};
