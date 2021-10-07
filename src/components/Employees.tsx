import { FC } from "react";
import { Container, TData, ButtonDelete, ButtonEdit } from "./Layouts";

import { IUser } from "../store/types";

const Employees: FC<{
  user: IUser;
  deleteHandler: (user: IUser) => void;
  editHandler: (user: IUser) => void;
}> = ({ user, deleteHandler, editHandler }) => {
  const handleDelete = () => {
    deleteHandler(user);
  };
  const handleEdit = () => {
    editHandler(user);
  };

  return (
    <>
      <Container>
        <TData>{user.name}</TData>
        <TData>{user.dateOfBirth}</TData>
        <TData>{user.gender}</TData>
        <TData>{user.salary}</TData>
        <TData>
          <ButtonEdit id="user" onClick={handleEdit}>
            Edit
          </ButtonEdit>
        </TData>
        <TData>
          <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
        </TData>
      </Container>
    </>
  );
};

export default Employees;
