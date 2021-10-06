import { ActionConstant, ActionTypes, GetUsers } from "../actions/types";
import { IUser, IUserState } from "../types";

const initialState: IUserState = {
  users: [],
};

export const userReducer = (
  state: IUserState = initialState,
  action: ActionTypes
): IUserState => {
  switch (action.type) {
    case ActionConstant.GET_USERS:
      const { payload } = action as GetUsers;
      return {
        ...state,
        loading: false,
        done: true,
        users: payload,
        error: undefined,
      };
    case ActionConstant.GET_USER:
      return {
        ...state,
        loading: false,
        done: true,
        user: action.payload as IUser,
        error: undefined,
      };
    case ActionConstant.SET_DONE:
      return {
        ...state,
        done: action.payload as boolean,
      };
    case ActionConstant.SET_LOADING:
      return {
        ...state,
        loading: action.payload as boolean,
      };
    case ActionConstant.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    case ActionConstant.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload as IUser],
        loading: false,
        done: true,
        error: undefined,
      };
    case ActionConstant.UPDATE_USER:
      const updatedUsr = action.payload as IUser;
      return {
        ...state,
        users: state.users.map((usr) => {
          if (usr._id === updatedUsr._id) {
            return updatedUsr;
          }
          return usr;
        }),
        error: undefined,
        done: true,
        loading: false,
      };
    case ActionConstant.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          (emp) => (action.payload as string) !== emp._id
        ),
        error: undefined,
        done: true,
        loading: false,
      };

    default:
      return state;
  }
};

export const loadingSelector = (state: IUserState) => state.loading;
export const errorSelector = (state: IUserState) => state.error;
export const doneSelector = (state: IUserState) => state.done;
export const userSelector = (state: IUserState) => state.user;
export const usersSelector = (state: IUserState) => state.users;
