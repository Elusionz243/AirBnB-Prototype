import { useParams } from "react-router-dom";

const Bnb = ({ selectedBookingCard }) => {
  const { bnb_id } = useParams();

  console.log(selectedBookingCard);

  return (
    <div>
      <div>{selectedBookingCard}</div>
    </div>
  );
};

export default Bnb;
