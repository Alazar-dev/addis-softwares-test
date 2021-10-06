import { IUser, IUserBase } from "../types";
import {
  LoadingAction,
  ActionConstant,
  ErrorAction,
  AddUser,
  DeleteUser,
  GetUser,
  GetUsers,
  DoneAction,
} from "./types";

export const setLoading = (loading: boolean): LoadingAction => ({
  type: ActionConstant.SET_LOADING,
  payload: loading,
});

export const setError = (error: string): ErrorAction => ({
  type: ActionConstant.SET_ERROR,
  payload: error,
});
export const setDone = (done: boolean): DoneAction => ({
  type: ActionConstant.SET_DONE,
  payload: done,
});

export const deleteUser = (id: string): DeleteUser => ({
  type: ActionConstant.DELETE_USER,
  payload: id,
});

export const setUsers = (data: IUser[]): GetUsers => ({
  type: ActionConstant.GET_USERS,
  payload: data,
});
export const setUser = (data: IUser): GetUser => ({
  type: ActionConstant.GET_USER,
  payload: data,
});
export const addUser = (data: IUserBase): AddUser => ({
  type: ActionConstant.ADD_USER,
  payload: data,
});
export const updateUser = (data: IUser): AddUser => ({
  type: ActionConstant.UPDATE_USER,
  payload: data,
});
