import React from "react";
import "../styles/auth.css";

const Auth = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
