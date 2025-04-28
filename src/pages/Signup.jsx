import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      const fetchData = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!fetchData.ok) {
        throw new Error(`HTTP error: Status ${fetchData.status}`);
      }
      const responseData = await fetchData.json();
      console.log(responseData);
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <NavLink to="/">LOGO HERE</NavLink>
      <div className="formWrapper" onSubmit={(e) => onSubmit(e)}>
        <form action="/signup" method="post">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
          <button type="submit">Create Account</button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    </>
  );
}

export default Signup;
