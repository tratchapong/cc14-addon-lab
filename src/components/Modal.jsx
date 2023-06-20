/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Modal = forwardRef(function (props, ref) {
  const { modal_name, children } = props;

  return (
    <>
      <input type="checkbox" id={modal_name} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label className="modal-action relative top-[-1rem]" htmlFor={modal_name} ref={ref}>
            X
          </label>
          {children}
        </div>
        <label className="modal-backdrop" htmlFor={modal_name}>
          close
        </label>
      </div>
    </>
  );
});

export default Modal;
