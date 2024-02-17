import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMsg("");
    }, 15000);

    return () => clearTimeout(timeoutId);
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError("");
    const value = e.target.value;

    switch (type) {
      case "user":
        setUser(value);
        if (value === "") setError("Username has been left blank!");
        else checkUser(value);
        break;
      case "email":
        setEmail(value);
        if (value === "") setError("Email has been left blank!");
        else checkEmail(value);
        break;
      case "pass1":
        setPass1(value);
        if (value === "") setError("Password has been left blank!");
        else checkPassword(value);
        break;
      case "pass2":
        setPass2(value);
        if (value === "") setError("Confirm Password has been left blank!");
        else if (value !== pass1) setError("Confirm password doesn't match!");
        else setMsg("All fields are valid!");
        break;
      default:
    }
  };

  const handleSubmit = () => {
    if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
      const url = "http://localhost/react/registration.php";
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const data = {
        user: user,
        email: email,
        pass: pass2,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
        })
        .catch((err) => {
          setError("Registration failed. Please try again.");
          console.error(err);
        });

      // Limpiar los estados después del envío exitoso
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required!");
    }
  };

  const checkUser = (value) => {
    if (value !== "") {
      const url = "http://localhost/react/checkuser.php";
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      const data = {
        user: value,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          setError(response[0].result);
        })
        .catch((err) => {
          setError(err);
          console.error(err);
        });
    }
  };

  const checkEmail = (value) => {
    if (value !== "") {
      const url = "http://localhost/react/checkemail.php";
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      const data = {
        email: value,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          setError(response[0].result);
        })
        .catch((err) => {
          setError(err);
          console.error(err);
        });
    }
  };

  const checkPassword = (value) => {
    if (value.length < 8) {
      setError("Password is less than 8 characters!");
    }
  };
  function LoginRedirect() {
    navigate("/login");
  }
  return (
    <div className="form">
      <h2 class="flex items-center text-5xl font-extrabold dark:text-black">
        SING UP
        <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          ARAXYS
        </span>
      </h2>
      <p>
        {msg !== "" ? (
          <span className="success">{msg}</span>
        ) : (
          <span className="error">{error}</span>
        )}
      </p>
      <label class="text-lg text-black font-semibold mt-5">Username</label>
      <input
        type="text"
        name="user"
        value={user}
        onChange={(e) => handleInputChange(e, "user")}
        onBlur={(e) => checkUser(e.target.value)}
      />
      <label class="text-lg text-black font-semibold mt-5">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleInputChange(e, "email")}
        onBlur={(e) => checkEmail(e.target.value)}
      />
      <label class="text-lg text-black font-semibold mt-5">Password</label>
      <input
        type="password"
        name="pass1"
        value={pass1}
        onChange={(e) => handleInputChange(e, "pass1")}
      />
      <label class="text-lg text-black font-semibold mt-5">
        Confirm Password
      </label>
      <input
        type="password"
        name="pass2"
        value={pass2}
        onChange={(e) => handleInputChange(e, "pass2")}
      />
      <p class="flex items-center gap-1 mt-2 font-sans text-sm antialiased font-normal leading-normal text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4 -mt-px"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Use at least 8 characters.
      </p>
      <input
        type="submit"
        value="Submit"
        className="Button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg mt-3 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmit}
      />
      <p className="text-sm  font-semibold mt-5" onClick={LoginRedirect}>
        Login
      </p>
    </div>
  );
}

export default Registration;
