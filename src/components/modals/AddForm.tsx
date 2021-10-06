import React, { useEffect, useState } from "react";
import { ButtonAdd, Input, DIV, Label, Select } from "../Layouts";
import { useForm } from "react-hook-form";
import { IUserBase } from "../../store/types";
import { ActionConstant } from "../../store/actions/types";
import { useDispatch, useSelector } from "react-redux";
import { doneSelector, loadingSelector } from "../../store/reducers";
import Modal from "../Modal";

function AddForm() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserBase>();
  const isDone = useSelector(doneSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    if (isDone && isLoading === false) {
      setOpen(false);
    }
  }, [isDone, isLoading, setOpen]);

  console.log(errors);

  const onSubmit = (data: IUserBase) => {
    dispatch({ type: ActionConstant.SAGA_ADD_USER, payload: data });
    setOpen(false);
  };

  return (
    <>
      <Modal setOpen={setOpen} open={open}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <DIV>
            <ButtonAdd>Add</ButtonAdd>
          </DIV>
        </form>
      </Modal>
      <DIV>
        <ButtonAdd onClick={() => setOpen(true)}>Add New</ButtonAdd>
      </DIV>
    </>
  );
}

export default AddForm;
