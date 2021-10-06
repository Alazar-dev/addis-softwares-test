import React, { useEffect, useState } from "react";
import { ButtonAdd, Input } from "../Layouts";
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
  };

  return (
    <>
      <Modal setOpen={setOpen} open={open}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name</label>
          <Input {...register("name", { required: true })} />

          <label>Date of birth</label>
          <Input type="date" {...register("dateOfBirth", { required: true })} />

          <label>Gender</label>
          <select
            style={{
              padding: "15px 6px",
              border: "none",
              outline: "1px #8284ff inset",
            }}
            {...register("gender")}
          >
            <option value="">Select gender ...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label> Salary</label>
          <Input {...register("salary", { required: true })} />
          {errors.salary && <span>Salary is required</span>}

          <Input type="submit" />
        </form>
      </Modal>
      <ButtonAdd onClick={() => setOpen(true)}>Add New</ButtonAdd>
    </>
  );
}

export default AddForm;
