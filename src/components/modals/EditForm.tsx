import React, { useEffect } from "react";
import { Input, Label, Select } from "../Layouts";
import { IUser } from "../../store/types";
import { useForm } from "react-hook-form";
import { IUserBase } from "../../store/types";
import { ActionConstant } from "../../store/actions/types";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import {
  doneSelector,
  loadingSelector,
  userSelector,
} from "../../store/reducers";

export const EditForm: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  const isDone = useSelector(doneSelector);
  const isLoading = useSelector(loadingSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUserBase>();

  useEffect(() => {
    if (isDone && isLoading === false) {
      setOpen(false);
    }
  }, [isDone, isLoading, setOpen]);

  const onSubmit = (data: IUser) => {
    const updateData = { ...user, ...data };
    dispatch({
      type: ActionConstant.SAGA_UPDATE_USER,
      payload: updateData,
    });
  };

  useEffect(() => {
    if (user) {
      setValue(
        "dateOfBirth",
        new Date(user.dateOfBirth)
          .toISOString()
          .substr(0, 10) as unknown as Date
      );
      setValue("salary", user.salary);
      setValue("gender", user.gender);
      setValue("name", user.name);
    }
  }, [user, setValue]);

  return (
    <Modal setOpen={setOpen} open={open}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Edit Form</h1>
        <Label>Full Name</Label>
        <Input {...register("name", { required: true })} />

        <Label>Date of birth</Label>
        <Input type="date" {...register("dateOfBirth", { required: true })} />

        <Label>Gender</Label>
        <Select {...register("gender")}>
          <option value="">Select gender ...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Label> Salary</Label>
        <Input {...register("salary", { required: true })} />
        {errors.salary && <span>Salary is required</span>}

        <Input type="submit" />
      </form>
    </Modal>
  );
};

export default EditForm;
