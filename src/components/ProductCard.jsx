/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useDeleteProductMutation, useUpdateProductMutation } from "../features/api/apiSlice";
import { useRef } from "react";
import Modal from "./Modal";
import FormProduct from "./FormProduct";

export default function ProductCard(props) {
  const { id, title, price, description, images } = props.item;
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation()

  const ref = useRef();

  const hdlDel = () => {
    deleteProduct(id);
  };
  const onSubmit = (input) => {
    updateProduct({...props.item, ...input})
    ref.current.click()
  };


  return (
    <>
      <li>
        <a href="#" className="block overflow-hidden group">
          <label htmlFor={`item${id}`}>
            <img
              src={images ? images[0] : 'https://www.svgrepo.com/show/513701/food.svg'}
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
          </label>

          <div className="relative pt-3 bg-white">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {title}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> £{price} GBP </span>
            </p>
            <button className="btn btn-error" onClick={hdlDel}>
              Delete
            </button>
          </div>
        </a>
      </li>

      <Modal modal_name={`item${id}`}>
        <label className="modal-action relative top-[-1.5rem]" htmlFor={`item${id}`} ref={ref}>
          X
        </label>
        <FormProduct item={props.item} onSubmit={onSubmit}/>
      </Modal>
    </>
  );
}
