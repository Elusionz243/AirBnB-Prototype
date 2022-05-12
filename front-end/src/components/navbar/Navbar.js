import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const navbarLinks = ["Home", "Link 2", "Link 3", "Link 4"];

  const loadNavbarLinks = (links) => {
    let allLinks = "";
    links.forEach(link => {
      allLinks += `<Link path="/${link}" className="navbar-links">${link}</Link>`
    });
    console.table(allLinks); 
    return allLinks; 
  };

  let links = loadNavbarLinks(navbarLinks);

  return (
    <div className="gradient-bg">
      <div className=" mx-3 py-1">
        <h1 className="px-1 text-center">
          <Link to="/" className="logo">
            Bed & Breakfast
          </Link>
        </h1>
      </div>
      <div className="d-flex">
        {links}
      </div>
    </div>
  );
}
