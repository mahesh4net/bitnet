import { useEffect, useState } from "react";
import Loader from "../component/loader";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function Authenticate() {
      try {
        const res = await fetch("http://localhost:5000/authenticate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await res.json()

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigate("/login");
        }
      } catch (err) {
        alert(err);

      }
    }
    if(!isAuthenticated){
    Authenticate();
    }
  }, [navigate, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="protected-container">
        <Loader size={100} color={"green"} thickness={5} />
      </div>
    );
  }

  return children;
}
