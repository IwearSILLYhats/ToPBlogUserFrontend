import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <NavLink to="/">LOGO HERE</NavLink>
      <div className="formWrapper">
        <form action="/signup" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
