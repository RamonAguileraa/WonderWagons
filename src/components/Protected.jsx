import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = (props) => {
  const naviget = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      localStorage.setItem(
        "loginStatus",
        "Please login to view the dashboard!"
      );
      naviget("/", { replace: true });
    }
  }, []);
  return <Component />;
};
export default Protected;
