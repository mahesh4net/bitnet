import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUserDetails } from "../../globalstate/userSlice";

export default function Profile() {
  const { uuid, fullname, username, email } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await fetch("http://localhost:5000/auth/logout", {
      method: "DELETE",
      credentials: "include",
    });

    // Optional: reset Redux here
   dispatch(resetUserDetails())
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          {fullname?.[0]?.toUpperCase() || "U"}
        </div>
        <h2 className="profile-fullname">{fullname}</h2>
        <p className="profile-username">@{username}</p>
        <div className="profile-info">
          <p><strong>Full Name:</strong> {fullname}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
        <button className="profile-logout-button secondary-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
