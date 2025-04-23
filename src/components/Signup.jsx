function Signup() {
  return (
    <div className="signup">
      <form action="/signup" method="post">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" name="confirm" id="" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
