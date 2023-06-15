/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Modal from "./Modal";
import axios from "axios";

export default function ProductCard(props) {
  const { id, title, price, description, images } = props.item;

  const [input, setInput] = useState("");
  const ref = useRef();

  const hdlChange = (e) => {
    if (input.includes("xxx")) {
      setInput("");
      ref.current.click();
    } else {
      setInput(e.target.value);
    }
  };

  const hdlDel = () => {
    axios.delete(`http://localhost:8080/products/${id}`).then( _=> {
      // alert('Delete done')
      // window.location.reload()
      props.doReload()
    })
  }
  return (
    <>
      <li>
        <a href="#" className="block overflow-hidden group">
          <label htmlFor={`item${id}`}>
            <img
              src={images[0]}
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
            <button className="btn btn-error" onClick={hdlDel}>Delete</button>
          </div>
        </a>
      </li>
      <Modal modal_name={`item${id}`}>
        <div className="text-4xl">{title}</div>
        <div className="text-xl">{description}</div>
        <div className="text-2xl">{price}THB</div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={input}
          onChange={hdlChange}
        />

        <label className="modal-action btn btn-primary" htmlFor={`item${id}`} ref={ref}>
          Close
        </label>
      </Modal>
    </>
  );
}
