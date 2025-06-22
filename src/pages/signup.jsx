import { useRef, useState } from "react";
import Loader from "../component/loader";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus('loading')
    
    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('null')
        if (data.error) {
          alert("internal server error!!!");
          return;
        }
        setErrors(data.errors || {});
      } else {
        setStatus('success')
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }
    } catch (error) {
      alert("something unexpected happened !");
      console.log(error)
      setStatus(null)
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit" className="signup-button" disabled={status === 'loading' || status === 'success'}
>
          {status === 'loading' ? <Loader size={20} color={'white'} thickness={3}/> : status === 'success' ? 'redirecting to login..' : 'Create Account'}
        </button>

      </form>
    </div>
  );
}
