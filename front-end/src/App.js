import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Booking from "./components/booking/Booking";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
