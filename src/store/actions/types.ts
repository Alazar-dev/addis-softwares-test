import { IUser, IUserBase } from "../types";

export interface GetUsers {
  type: string;
  payload: IUser[];
}

export interface GetUser {
  type: string;
  payload: IUser;
}

export interface AddUser {
  type: string;
  payload: IUserBase;
}

export interface UpdateUser {
  type: string;
  payload: IUser;
}

export interface DeleteUser {
  type: string;
  payload: string;
}

export interface LoadingAction {
  type: string;
  payload: boolean;
}

export interface ErrorAction {
  type: string;
  payload: string;
}

export interface DoneAction {
  type: string;
  payload: boolean;
}

export type ActionTypes =
  | LoadingAction
  | ErrorAction
  | UpdateUser
  | GetUsers
  | GetUser
  | DeleteUser;

export const ActionConstant = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  UPDATE_USER: "UPDATE_USER",
  GET_USERS: "GET_USERS",
  GET_USER: "GET_USER",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_DONE: "DONE",
  SAGA_DELETE_USER: "SAGA_DELETE_USER",
  SAGA_UPDATE_USER: "SAGA_UPDATE_USER",
  SAGA_GET_USERS: "SAGA_GET_USERS",
  SAGA_GET_USER: "SAGA_GET_USER",
  SAGA_SET_USER: "SAGA_SET_USER",
  SAGA_SET_LOADING: "SAGA_SET_LOADING",
  SAGA_SET_ERROR: "SAGA_SET_ERROR",
  SAGA_ADD_USER: "SAGA_ADD_USER",
};
