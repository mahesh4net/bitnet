import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  async function LogOut() {
    try {
      const res = await fetch("http://localhost:5000/auth/logout", {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        navigate("/login");
      } else {
        alert("error loging out !");
      }
    } catch (err) {
      console.log(err);
      alert("error loging out !");
    }
  }

  return (
    <>
      <div className="sidebar-container">
        <ul>
          <li>
            <Link to="/dashboard">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/dashboard/shortlink">Create new</Link>
          </li>
        </ul>
        <ul>
          <li className="logout-btn">
            <button onClick={LogOut}>LogOut</button>
          </li>
        </ul>
      </div>
    </>
  );
}
