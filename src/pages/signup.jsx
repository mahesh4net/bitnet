

export default function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Choose a username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Create a password" required />
        </div>

        <button type="submit" className="signup-button">Create Account</button>
      </form>
    </div>
  );
}
