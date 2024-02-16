import "../Style.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const naviget = useNavigate();
  function logoutSubmit() {
    localStorage.setItem("login", false);
    localStorage.setItem("loginStatus", "Logged out successfully!");
    naviget("/");
  }
  return (
    <div>
      <h3>Dashboard Page</h3>
      <p onClick={logoutSubmit}>Logout</p>
    </div>
  );
}

export default Dashboard;
//return{
//  <div className="form">
//  <label> Username </label>
//  <input type="text" />
//  <label> Password</label>
//  <input type="password" />
//  <label></label>
//  <input type="submit" defaultValue="Login" className="button" />
//</div>
// };
