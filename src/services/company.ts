import { ICompany } from '../dtos';
import { get, post, put, remove as deleteCompany } from './api';

const findById = async (id: number) =>
  get({ type: 'company', service: `/company/${id}` });

const findAll = async () => get({ type: 'company', service: `/company` });

const create = async (data: ICompany) =>
  post({ type: 'company', service: `/company`, data });

const update = async (id: number, data: ICompany) =>
  put({ type: 'company', service: `/company/${id}`, data });

const remove = async (id: number) =>
  deleteCompany({ type: 'company', service: `/company/${id}` });

export const companyService = {
  findById,
  findAll,
  update,
  remove,
  create,
};
