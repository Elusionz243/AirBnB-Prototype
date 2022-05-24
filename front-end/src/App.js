import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingPage/LandingPage";
import Bnb from "./components/booking/Bnb";
import NotFound from "./components/errors/NotFound";

function App() {
  let navigate = useNavigate();

  let selectedBookingCard;
  const selectCard = (bookingCard, i) => {
    // console.log(cardRefs.current[i]);
    console.log(bookingCard);
    selectedBookingCard = bookingCard;
    navigate(`/bnb/${i}`);
  };
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage selectCard={selectCard} />} />
        <Route
          path="/bnb/:bnb_id"
          element={<Bnb selectedBookingCard={selectedBookingCard} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
