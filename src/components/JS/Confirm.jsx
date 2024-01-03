import "../CSS/Confirm.css";
import Footer from "./Footer";

function Confirm() {
  return (
    <>
      <section>
        <header>
          <h1>Hotel Booking Form</h1>
        </header>
        <form action="confirmation.html" method="post">
          <label for="guestName" id="guestname">
            Please enter your Name:
          </label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            placeholder="Enter your Name"
            required
          />

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
            placeholder="Please enter the number of person/guests"
            required
          />
          <label for="additionalthings">Any additional things needed</label>
          <input
            type="text"
            name="additional"
            id="addition"
            placeholder="Extra bed,blankets etc"
          />
          <button type="submit" id="buttonSubmit">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Confirm;
