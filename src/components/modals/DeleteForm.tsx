import React, { useEffect } from "react";
import { ButtonDelete, TData, DIVColumn } from "../Layouts";
import DeleteModal from "../DeleteModal";
import { useSelector } from "react-redux";
import { doneSelector, loadingSelector } from "../../store/reducers";

export const DeleteForm: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  confirmDelete: () => void;
}> = ({ open, setOpen, confirmDelete }) => {
  const isDone = useSelector(doneSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    if (isDone && isLoading === false) {
      setOpen(false);
    }
  }, [isDone, isLoading, setOpen]);

  const handleClick = () => {
    confirmDelete();
  };

  return (
    <DeleteModal setOpen={setOpen} open={open}>
      <DIVColumn>
        <TData>Are you sure you wanna delete?</TData>
        <ButtonDelete onClick={handleClick}>Delete</ButtonDelete>
      </DIVColumn>
    </DeleteModal>
  );
};

export default DeleteForm;
