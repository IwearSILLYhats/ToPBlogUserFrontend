function Login() {
  return (
    <form action="/login" method="get">
      <label htmlFor="">Email</label>
      <input type="email" name="email" id="" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
