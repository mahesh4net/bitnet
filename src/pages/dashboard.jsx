import { Outlet } from "react-router-dom";
import Sidebar from "../component/siderbar";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}
