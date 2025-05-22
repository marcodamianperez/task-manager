import "./Navbar.css";
import { TbTriangleInvertedFilled } from "react-icons/tb";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="title">
          <span className="logo">
            <TbTriangleInvertedFilled />
          </span>
          <span className="text">Task Manager</span>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
