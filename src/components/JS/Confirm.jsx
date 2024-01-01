import "../CSS/Confirm.css";

function Confirm() {
  return (
    <>
      <header>
        <h1>Hotel Booking Form</h1>
      </header>

      <section>
        <form action="confirmation.html" method="post">
          <label for="guestName">Please enter your Name:</label>
          <input type="text" id="guestName" name="guestName" required />

          <label for="checkInDate">Check-in Date:</label>
          <input type="date" id="checkInDate" name="checkInDate" required />

          <label for="checkOutDate">Check-out Date:</label>
          <input type="date" id="checkOutDate" name="checkOutDate" required />

          <label for="roomType">Room Type:</label>
          <select id="roomType" name="roomType" required>
            <option value="standard">SELECT THE ROOM TYPE</option>
            <option value="standard">Standard Room</option>
            <option value="standard">Double Room</option>
            <option value="standard">Twin Room</option>
            <option value="standard">Suite</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="deluxe">Executive Room</option>
            <option value="deluxe">Family Room</option>
            <option value="deluxe">Adjoining or Connecting Rooms</option>
            <option value="deluxe">Penthouse Suite</option>
            <option value="deluxe">Honeymoon Suite</option>
            <option value="deluxe">Accessible Room</option>
            <option value="deluxe">Cabana or Poolside Room</option>
            <option value="deluxe">Jacuzzi or Spa Room</option>
            <option value="deluxe">Pet-Friendly Room</option>
            <option value="deluxe">Extended Stay Room</option>
          </select>

          <label for="numGuests">Number of Guests:</label>
          <input
            type="number"
            id="numGuests"
            name="numGuests"
            min="1"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>
          &copy; RoamRelax | <a href="index.html">Terms and Conditions</a> |{" "}
          <a href="index.html">Privacy Policy</a>
        </p>
      </footer>
    </>
  );
}

export default Confirm;
