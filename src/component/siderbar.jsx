


export default function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <ul>
          <li><a href="/dashboard">Profile</a></li>
          <li><a href="/dashboard/analytics">Analytics</a></li>
          <li><a href="/dashboard/shortlink">Create new</a></li>
        </ul>
        <ul>
          <li className="logout-btn"><button >LogOut</button></li>
        </ul>
      </div>
    </>
  );
}
