import React, { useEffect } from "react";
import { Input } from "../Layouts";
import Modal from "../Modal";
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
    <Modal setOpen={setOpen} open={open}>
      <Input type="button" onClick={handleClick} />
    </Modal>
  );
};

export default DeleteForm;
