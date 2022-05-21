import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Booking from "./components/booking/Booking";

function App() {
  const navbarLinks = ["Home", "BnBs", "Bookings", "About Us"];

  return (
    <div className="container">
      <Navbar navbarLinks={navbarLinks} />
      <Routes>
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
    </div>
  );
}

export default App;
