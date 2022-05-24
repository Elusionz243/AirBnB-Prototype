import { useRef } from "react";

import "./BookingCard.css";

const BookingCard = ({ image, city, state, price, bnb_id, selectCard }) => {
  const cardRefs = useRef([]);

  return (
    <div
      ref={(element) => (cardRefs.current[bnb_id] = element)}
      className="card bnb-card m-3"
      onClick={() => selectCard(cardRefs.current[bnb_id], bnb_id)}
      id={bnb_id}
    >
      <div
        className="b-b-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="px-1">
        <p className="fs-7 m-0">
          <strong>
            {city}, {state}
          </strong>
        </p>
        <div className="d-flex">
          <p className="m-0">
            <strong style={{ color: "green" }}>${price}</strong> per night
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
