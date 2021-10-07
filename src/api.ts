import { axiosInstance } from "./config";
import { IUser, IUserBase } from "./store/types";

export const fetchUsers = async (): Promise<IUser[]> => {
  const res = await axiosInstance.get("/users");

  if (res.status === 200 && res.data.data) {
    const users: IUser[] = res.data.data;
    return users;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("Error: " + res.data.error.message);
  }
};
export const fetchUser = async (id: string): Promise<IUser> => {
  const res = await axiosInstance.get(`/users/${id}`);

  if (res.status === 200 && res.data.data) {
    const user: IUser = res.data.data;
    return user;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("Error: " + res.data.error.message);
  }
};

export const registerUser = async (data: IUserBase): Promise<IUser> => {
  const res = await axiosInstance.post("/users", data);

  if (res.status === 200 && res.data.data) {
    const user: IUser = res.data.data;
    return user;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("Error: " + res.data.error.message);
  }
};
export const updateUserInfo = async (data: Partial<IUser>): Promise<IUser> => {
  const res = await axiosInstance.put(`/users/${data._id}`, data);

  if (res.status === 200 && res.data.data) {
    const user: IUser = res.data.data;
    return user;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("Error: " + res.data.error.message);
  }
};
export const deleteUserById = async (id: string) => {
  const res = await axiosInstance.delete(`/users/${id}`);
  if (res.status === 200 && res.data.success) {
    const user: IUser = res.data.data;
    return user;
  } else if (res.data.error) {
    throw new Error(res.data.error.message);
  } else {
    throw new Error("Error: " + res.data.error.message);
  }
};
