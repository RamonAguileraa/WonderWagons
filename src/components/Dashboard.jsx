import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function logoutSubmit() {
    localStorage.setItem("login", false);
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/login");
  }

  return (
    <div>
      <h3>Dashboard Page</h3>
      <p onClick={logoutSubmit}>Logout</p>
    </div>
  );
}

export default Dashboard;
