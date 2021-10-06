import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, usersSelector } from "../../store/reducers";
import { ActionConstant } from "../../store/actions/types";
import { IUser } from "../../store/types";
import Employees from "../../components/Employees";
import EditForm from "../../components/modals/EditForm";
import DeleteForm from "../../components/modals/DeleteForm";
import { Container, Table, THead, Title } from "../../components/Layouts";
import AddForm from "../../components/modals/AddForm";

function Home() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const user = useSelector(userSelector);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: ActionConstant.SAGA_GET_USERS });
  }, [dispatch]);

  const confirmDelete = () => {
    dispatch({
      type: ActionConstant.SAGA_DELETE_USER,
      payload: user?._id,
    });
    setDeleteOpen(false);
  };

  const deleteHandler = (user: IUser) => {
    dispatch({
      type: ActionConstant.SAGA_SET_USER,
      payload: user,
    });
    setDeleteOpen(true);
  };

  const editHandler = (user: IUser) => {
    dispatch({
      type: ActionConstant.SAGA_SET_USER,
      payload: user,
    });
    setUpdateOpen(true);
  };
  return (
    <div>
      <Table>
        <Title>Employee List</Title>
        <Container>
          <THead>Full Name</THead>
          <THead>Date of Birth</THead>
          <THead>Gender</THead>
          <THead>Salary</THead>
        </Container>
        {users.map((usr) => (
          <Employees
            editHandler={editHandler}
            deleteHandler={deleteHandler}
            user={usr}
          />
        ))}
      </Table>
      <AddForm />
      <DeleteForm
        confirmDelete={confirmDelete}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
      <EditForm open={updateOpen} setOpen={setUpdateOpen} />
    </div>
  );
}

export default Home;
