export interface IAddress {
  id: number;
  name: string;
  zipCode: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  companyId: string;
}

export interface ICompany {
  id?: number;
  name: string;
  cnpj: string;
  website: string;
  addresses?: IAddress[];
}

export interface IUserInfo {
  id?: number;
  name: string;
  email: string;
  password: string;
  typeUser: number;
  companies?: ICompany[];
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IConfig {
  type: string;
  service: string;
  data?: IUserCredentials | IUserInfo | IAddress | ICompany;
  queryString?: string;
}

export interface IInitialState {
  error: boolean;
  errorMessage: string;
  isLoading: boolean;
  data?: IUserInfo | IAddress | ICompany;
}

export interface IAction {
  type: string;
  payload?: IUserInfo | IAddress | ICompany;
  errorMessage?: string;
}
