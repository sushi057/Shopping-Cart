import "./styles/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import User from "./pages/User";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<Men />} />
        <Route path="kids" element={<Kids />} />
        <Route path="user" element={<User />} />
        <Route path="/Shopping-Cart" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
