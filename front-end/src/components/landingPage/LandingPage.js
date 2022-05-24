import { useNavigate } from "react-router-dom";

import BookingCard from "../booking/bookingCard/BookingCard";

import bnbs from "../../utils/jsons/bookings.json";

import "./LandingPage.css";

export default function LandingPage({ selectCard }) {
  const loadBnBs = (BnBs) =>
    BnBs.map((bnb, index) => (
      <BookingCard
        key={index}
        image={bnb.image}
        city={bnb.city}
        state={bnb.state}
        price={bnb.price}
        bnb_id={bnb.bnb_id}
        selectCard={selectCard}
      />
    ));

  return (
    <div className="container d-flex justify-content-evenly flex-wrap">
      {loadBnBs(bnbs)}
    </div>
  );
}
