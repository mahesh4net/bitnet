import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <button onClick={() => navigate("/")} className="home-button">
        Go Home
      </button>
    </div>
  );
}
