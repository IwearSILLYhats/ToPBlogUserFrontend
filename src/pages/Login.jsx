import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <NavLink to="/">LOGO HERE</NavLink>
      <div className="formWrapper">
        <form action="/login" method="get">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="loginEmail" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="loginPassword" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
