import NavLink from "../Link/Link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav style={{ margin: 10 }}>
      <NavLink to="/" linkText="Home" />
      <NavLink to="/about" linkText="About" />
    </nav>
  );
};

export default NavBar;
