import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { isAuthenticated, fullname } = useSelector((state) => state.user);
const navigate = useNavigate()



  return (
    <>
      <div className="navbar-container">
        <div className="nav-logo">
          <Link to="/">BITNET.</Link>
        </div>

        {!isAuthenticated ? (
          <div className="login-signup-box">
            <Link to="/login" className="login-btn primary-btn">
              Login
            </Link>
            <Link to="/signup" className="signup-btn primary-btn">
              Signup
            </Link>
          </div>
        ) : (
          <div className="header-profile-avatar" onClick={()=> navigate('/dashboard')}>
            {fullname?.[0]?.toUpperCase() || "U"}
          </div>
        )}
      </div>
    </>
  );
}
