import { IAddress } from '../dtos';
import { get, post, put, remove as deleteAddress } from './api';

const findById = async (id: number) =>
  get({ type: 'address', service: `/address/${id}` });

const findAll = async () => get({ type: 'address', service: `/address` });

const create = async (data: IAddress) =>
  post({ type: 'address', service: `/address`, data });

const update = async (id: number, data: IAddress) =>
  put({ type: 'address', service: `/address/${id}`, data });

const remove = async (id: number) =>
  deleteAddress({ type: 'address', service: `/address/${id}` });

export const addressService = {
  findById,
  findAll,
  update,
  remove,
  create,
};
