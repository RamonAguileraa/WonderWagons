import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = (props) => {
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      localStorage.setItem(
        "loginStatus",
        "Please login to view the dashboard!"
      );
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return <Component />;
};

export default Protected;
