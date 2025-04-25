import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/">LOGO HERE</NavLink>
      <input type="text" name="search" id="" placeholder="Search" />
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="signup">Signup</NavLink>
      </div>
    </nav>
  );
}

export default Header;
