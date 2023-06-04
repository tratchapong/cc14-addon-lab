import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-end items-end pe-5 gap-5 h-[80px] bg-lime-400">
      <Link to='/'>Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
