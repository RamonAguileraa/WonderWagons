import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
