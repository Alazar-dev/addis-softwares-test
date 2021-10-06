import React, { useEffect } from "react";
import { Input } from "../Layouts";
import { IUser } from "../../store/types";
import { useForm } from "react-hook-form";
import { IUserBase } from "../../store/types";
import { ActionConstant } from "../../store/actions/types";
import { useDispatch, useSelector } from "react-redux";
import {
  doneSelector,
  loadingSelector,
  userSelector,
} from "../../store/reducers";

function AddForm() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isDone = useSelector(doneSelector);
  const isLoading = useSelector(loadingSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUserBase>();

  // const onSubmit = (data: IUserBase) => {
  //   dispatch({ type: ActionConstant.SAGA_ADD_USER, payload: data });
  //   console.log(data);
  // };

  const onSubmit = (data: IUser) => {
    const updateData = { ...user, ...data };
    dispatch({
      type: ActionConstant.SAGA_UPDATE_USER,
      payload: updateData,
    });
  };

  // useEffect(() => {
  //   if (isDone && isLoading === false) {
  //   }
  // }, [isDone, isLoading]);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit Form</h1>
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
  );
}

export default AddForm;
