import "./Navbar.css";

export default function Navbar({ navbarLinks }) {
  const loadNavbar = (links) =>
    links.map((link, index) => (
      <a
        key={index}
        href={`/${link}`}
        className="text-decoration-none navbar-links "
      >
        {link}
      </a>
    ));

  return (
    <div className="navbar-bg">
      <div className=" mx-3 py-1 navbar-container">
        <div className="px-1 logo text-center">
          <h1 className="logo">Bed & Breakfast</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {loadNavbar(navbarLinks)}
      </div>
    </div>
  );
}
