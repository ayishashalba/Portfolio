import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand">
          Ayisha Shalba
        </Link>

        <nav className="main-nav">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-item">
            About
          </NavLink>

          <NavLink to="/skills" className="nav-item">
            Skills
          </NavLink>

          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>

          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;