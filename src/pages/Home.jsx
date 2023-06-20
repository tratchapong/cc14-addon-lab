import { useRef } from "react";
import ButtonModal from "../components/ButtonModal";
import Modal from "../components/Modal";
import Login from "./Login";
import Register from "./Register"

export default function Home() {
  const ref = useRef()
  return (
    <div className="hero min-h-[calc(100vh-80px)]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonModal modal_name="login-modal">
            <div className="btn mx-2">Login</div>
          </ButtonModal>
          <ButtonModal modal_name="register-modal">
            <div className="btn mx-2">Register</div>
          </ButtonModal>
        </div>
      </div>
      <Modal modal_name="login-modal" ref={ref}>
        <Login />
      </Modal>
      <Modal modal_name='register-modal' ref={ref}>
        <Register />
      </Modal>
    </div>
  );
}
