import { useDispatch, useSelector } from "react-redux";
import { checkIn, checkOut } from "../features/authSlice";

function CheckInOut() {
  const dispatch = useDispatch();
  const lastCheckIn = useSelector(state => state.auth.lastCheckIn);

  return (
    <div>
      <h2>Check-In / Check-Out</h2>
      <p>Last Check-In: {lastCheckIn ? new Date(lastCheckIn).toLocaleString() : "Not checked in"}</p>
      <button onClick={() => dispatch(checkIn())}>Check In</button>
      <button onClick={() => dispatch(checkOut())}>Check Out</button>
    </div>
  );
}

export default CheckInOut;
