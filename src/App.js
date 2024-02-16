import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
