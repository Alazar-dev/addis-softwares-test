import React, { useEffect } from "react";
import Modal from "react-modal";
import {
  ButtonEdit,
  Container,
  TData,
  THead,
  Title,
  DIV,
  ButtonAdd,
  ButtonDelete,
  Table,
} from "../../components/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/reducers";
import { IUser } from "../../store/types";
import { ActionConstant } from "../../store/actions/types";
import { useState } from "react";
import AddForm from "../../components/modals/AddForm";
import EditForm from "../../components/modals/EditForm";
import DeleteForm from "../../components/modals/DeleteForm";

const Employee: React.FC<{
  user: IUser;
  deleteHandler: (user: IUser) => void;
  editHandler: (user: IUser) => void;
}> = ({ user, deleteHandler, editHandler }) => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  const [addModalOpen, setAddModal] = useState(false);
  const [editModalOpen, setEditModal] = useState(false);
  const [deleteModalOpen, setDeleteModal] = useState(false);

  function openAddModal() {
    setAddModal(true);
  }

  function closeAddModal() {
    setAddModal(false);
  }

  function openEditModal() {
    setEditModal(true);
    editHandler(user);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  function openDeleteModal() {
    setDeleteModal(true);
    deleteHandler(user);
  }

  function closeDeleteModal() {
    setDeleteModal(false);
  }

  function afterOpenModal() {}

  useEffect(() => {
    dispatch({ type: ActionConstant.SAGA_GET_USERS });
  }, [dispatch]);

  return (
    <>
      <Title>Employee List</Title>
      <Table>
        <Container>
          <THead>Full Name</THead>
          <THead>Date of Birth</THead>
          <THead>Gender</THead>
          <THead>Salary</THead>
        </Container>
        {users.map((user) => (
          <Container>
            <TData key={user._id}>{user.name}</TData>
            <TData key={user._id}>{user.dateOfBirth}</TData>
            <TData key={user._id}>{user.gender}</TData>
            <TData key={user._id}>{user.salary}</TData>
            <TData>
              <ButtonEdit onClick={openEditModal}>Edit</ButtonEdit>
            </TData>
            <TData>
              <ButtonDelete onClick={openDeleteModal}>Delete</ButtonDelete>
            </TData>
          </Container>
        ))}
      </Table>
      <DIV>
        <ButtonAdd onClick={openAddModal}>Add New</ButtonAdd>
      </DIV>
      <Modal
        isOpen={addModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeAddModal}
        style={customStyles}
      >
        <AddForm />
      </Modal>
      <Modal
        isOpen={editModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeEditModal}
        style={customStyles}
      >
        <EditForm />
      </Modal>
      <Modal
        isOpen={deleteModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeDeleteModal}
        style={customStyles}
      >
        <DeleteForm />
      </Modal>
    </>
  );
};

export default Employee;

const customStyles = {
  content: {
    width: "30%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
