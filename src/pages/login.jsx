import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../component/loader";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setErrors({});
    setStatus("loading");
    console.log("fetch strting");
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      console.log("fetch complete");
      const data = await res.json();

      if (!res.ok) {
        setStatus(null);
        if (data.error) {
          alert("internal server error !!");
          return;
        }
        setErrors(data.errors || {});
      } else {
        setStatus("success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      alert("unexpected error occured !");

      setStatus(null);
    }
  }

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="signup-container login-container">
      <form className="signup-form login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
            value={formData.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="signup-button"
          disabled={status == "loading" || status == "success"}
        >
          {status === "loading" ? (
            <Loader size={20} color={"white"} thickness={3} />
          ) : status === "success" ? (
            "redirecting to dashboard.."
          ) : (
            "Log In"
          )}
        </button>
      </form>
    </div>
  );
}
