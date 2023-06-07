export default function Modal({modal_name, children }) {

  return (
    <>
      <input type="checkbox" id={modal_name} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
            {children}
        </div>
        <label className="modal-backdrop" htmlFor={modal_name}>
          Close
        </label>
      </div>
    </>
  );
}
