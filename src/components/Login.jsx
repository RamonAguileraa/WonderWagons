import "../Style.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }

    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(() => {
        localStorage.clear();
        window.location.reload();
      }, 1200);
    }

    setTimeout(() => {
      setMsg("");
    }, 1000);
  }, [msg, navigate]);

  const handleInputChange = (e, type) => {
    setError("");
    switch (type) {
      case "user":
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has been left blank");
        }
        break;
      case "pass":
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has been left blank");
        }
        break;
      default:
    }
  };
  function RegisterRedirect() {
    navigate("/registration");
  }
  const loginSubmit = () => {
    if (user !== "" && pass !== "") {
      const url = "http://localhost/react/login.php";
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const data = {
        user: user,
        pass: pass,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            response[0].result === "Invalid username!" ||
            response[0].result === "Invalid password!"
          ) {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
            localStorage.setItem("login", true);
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          setError("Network error. Please try again.");
          console.error(err);
        });
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className="form">
      <h2 class="flex items-center text-5xl font-extrabold dark:text-black">
        LOGIN
        <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          ARAXYS
        </span>
      </h2>

      <p>
        {error !== "" ? (
          <span className="error">{error}</span>
        ) : (
          <span className="success">{msg}</span>
        )}
      </p>
      <label className="text-lg text-black font-semibold mt-5">Username</label>
      <input
        className=""
        type="text"
        value={user}
        onChange={(e) => handleInputChange(e, "user")}
      />
      <label className="text-lg text-black font-semibold mt-5">Password</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => handleInputChange(e, "pass")}
      />

      <input
        type="submit"
        value="Login"
        className="mt-3 button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-3 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={loginSubmit}
      />
      <p className="text-sm  font-semibold mt-5" onClick={RegisterRedirect}>
        Sing up
      </p>
    </div>
  );
}

export default Login;
