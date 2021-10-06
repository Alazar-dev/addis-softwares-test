export interface IUserBase {
  name: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  salary: number;
}

export interface IUser extends IUserBase {
  _id: string;
}

export interface IUserState {
  users: IUser[];
  user?: IUser;
  loading?: boolean;
  done?: boolean;
  error?: string;
}

export enum GenderEnum {
  MALE = "Male",
  FEMALE = "Female",
}
