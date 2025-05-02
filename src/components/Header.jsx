import "./Header.css";
import { NavLink } from "react-router-dom";
import useLocal from "../hooks/useLocal";
import Profile from "./Profile";

function Header() {
  const [user, setUser] = useLocal("jwtToken", null);
  function logout() {
    setUser(null);
  }

  return (
    <nav>
      <NavLink to="/">LOGO HERE</NavLink>
      <input type="text" name="search" id="" placeholder="Search" />
      {user === null ? (
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
      ) : (
        <Profile user={user} logout={logout} />
      )}
    </nav>
  );
}

export default Header;
