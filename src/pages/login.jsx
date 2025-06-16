import React from 'react';

export default function Login() {
  return (
    <div className="signup-container login-container">
      <form className="signup-form login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="usernameOrEmail">Username or Email</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            placeholder="Enter username or email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="signup-button">
          Log In
        </button>
      </form>
    </div>
  );
}
