import { useEffect, useState } from "react";
import Loader from "../component/loader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../globalstate/userSlice";

export default function ProtectedRoute({ children }) {
  const {isAuthenticated} = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
          dispatch(setUserDetails(data.decoded))
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.log(err)
        alert(err);

      }
    }
    if(!isAuthenticated){
    Authenticate();
    }
  }, [navigate, isAuthenticated, dispatch]);

  if (!isAuthenticated) {
    return (
      <div className="protected-container">
        <Loader size={100} color={"green"} thickness={5} />
      </div>
    );
  }

  return children;
}
