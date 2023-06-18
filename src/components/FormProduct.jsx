/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

export default function FormProduct(props) {
  const options = {};
  if (props.item) {
    const { id, title, price, description, images } = props.item;
    options.defaultValues = {
      title,
      description,
      price,
    };
  }

  const { register, handleSubmit } = useForm(options);

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className="grid grid-cols-1 gap-2">
      <p className="text-2xl">{props.item ? "Edit" : "Add new"}</p>
      <input
        type="text"
        placeholder="Product title"
        className="input input-bordered "
        {...register("title")}
      />
      <input
        type="text"
        placeholder="Description"
        className="input input-bordered "
        {...register("description")}
      />
      <input
        type="text"
        placeholder="Price"
        className="input input-bordered "
        {...register("price")}
      />
      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  );
}
