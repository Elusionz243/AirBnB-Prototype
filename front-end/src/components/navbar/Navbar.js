import { useNavigate } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  let navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };
  return (
    <div className="navbar-bg d-flex justify-content-evenly border-bottom">
      <div className="px-1 logo text-center">
        <h1 className="logo btn" onClick={handleLogo}>
          Bed & Breakfast
        </h1>
      </div>
      <div className="searchbar-container input-group">
        <input className="form-control searchbar" placeholder="Search..." />
        <span
          className="input-group-text"
          style={{ borderRadius: "0 25px 25px 0" }}
        >
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  );
}
