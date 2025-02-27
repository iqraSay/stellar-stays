import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/FormBg2.jpg";
import Footer from "../../components/Footer";
import { db, auth } from '../../firebase'; // Import auth from Firebase
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import logo from "../../assets/logo.png";
import "../../css/style.css";

const Reservation = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedEventVenues, setSelectedEventVenues] = useState([]);
  const [stayDuration, setStayDuration] = useState(0);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to login page if user is not logged in
        navigate("/login");
      } else {
        // If user is logged in, set their email
        setEmail(user.email || "");
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  // Amenities and their prices
  const amenities = [
    { name: "Indoor Pool Access Charge", price: 500 },
    { name: "Private Pool Cabana", price: 3000 },
    { name: "Additional Cleaning", price: 300 },
    { name: "Laundry Services", price: 200 },
    { name: "Extra Bed (Rollaway Bed)", price: 2000 },
    { name: "Sofa Bed", price: 2500 },
    { name: "Massage (30-45 min)", price: 2500 },
    { name: "Full Body Massage (60-90 min)", price: 5000 },
    { name: "Yoga Classes (Per Session)", price: 1500 },
    { name: "Sauna/Steam Access", price: 800 },
    { name: "Gym Access Fee", price: 1000 },
    { name: "Buffet (Breakfast/Lunch/Dinner)", price: 1500 },
    { name: "Daycare for Kids (Hourly)", price: 800 },
    { name: "Full-Day Childcare", price: 2000 },
    { name: "Kids’ Club Activities", price: 1500 },
  ];

  // Event venues and their prices
  const eventVenues = [
    { name: "Conference Room", price: 3000 },
    { name: "Banquet Hall", price: 30000 },
    { name: "Wedding Venue", price: 50000 },
    { name: "Exhibition Hall", price: 40000 },
  ];

  // Fetch room types and their prices
  useEffect(() => {
    const fetchRoomTypes = async () => {
      const roomTypesCollection = collection(db, "RoomTypes");
      const roomTypesSnapshot = await getDocs(roomTypesCollection);
      const roomTypesList = roomTypesSnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().Name,
        price: doc.data().Room_price,
      }));
      setRoomTypes(roomTypesList);
    };

    fetchRoomTypes();
  }, []);

  // Update room price and calculate stay duration
  useEffect(() => {
    if (selectedRoomType && checkIn && checkOut) {
      const selectedRoom = roomTypes.find(room => room.name === selectedRoomType);
      if (selectedRoom) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const duration = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        setStayDuration(duration);
        setRoomPrice(selectedRoom.price * duration);
        setTotalPrice(selectedRoom.price * duration);
      }
    }
  }, [selectedRoomType, checkIn, checkOut, roomTypes]);

  // Handle amenity selection
  const handleAmenityChange = (amenity) => {
    const isSelected = selectedAmenities.includes(amenity.name);
    if (isSelected) {
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenity.name));
      setTotalPrice(totalPrice - amenity.price);
    } else {
      setSelectedAmenities([...selectedAmenities, amenity.name]);
      setTotalPrice(totalPrice + amenity.price);
    }
  };

  // Handle event venue selection
  const handleEventVenueChange = (venue) => {
    const isSelected = selectedEventVenues.includes(venue.name);
    if (isSelected) {
      setSelectedEventVenues(selectedEventVenues.filter(item => item !== venue.name));
      setTotalPrice(totalPrice - venue.price);
    } else {
      setSelectedEventVenues([...selectedEventVenues, venue.name]);
      setTotalPrice(totalPrice + venue.price);
    }
  };

  // Handle reservation submission
  const handleReservation = async (e) => {
    e.preventDefault();

    if (!email || !phoneNo || !checkIn || !checkOut || !selectedRoomType) {
      setError("All fields are required!");
      return;
    }

    // Check if check-in or check-out dates are in the past
    const today = new Date();
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate < today || checkOutDate < today) {
      setError("Check-in and check-out dates cannot be in the past.");
      return;
    }

    try {
      // Generate reservation ID
      const reservationCountDoc = await getDocs(collection(db, "Reservations"));
      const reservationIdString = "res" + (reservationCountDoc.size + 1);

      // Store reservation details in Firestore
      const reservationRef = doc(db, "Reservations", reservationIdString);
      await setDoc(reservationRef, {
        Reservation_id: reservationIdString,
        Room_type: selectedRoomType,
        Status: "pending",
        Email: email,
        Phone: phoneNo,
        Check_in: checkIn,
        Check_out: checkOut,
        Total_price: totalPrice,
        Amenities: selectedAmenities.join(", "),
        Event_venue: selectedEventVenues.join(", "),
      });

      // Redirect to payment page
      navigate("/payment", {
        state: {
          totalPrice,
          reservationDetails: {
            Reservation_id: reservationIdString,
            Room_type: selectedRoomType,
            Check_in: checkIn,
            Check_out: checkOut,
            Amenities: selectedAmenities.join(", "),
            Event_venue: selectedEventVenues.join(", "),
          },
        },
      });
    } catch (error) {
      setError("Error making reservation: " + error.message);
    }
  };

  return (
    <div>
      <section
        className="section-padding bg-img bg-fixed"
        data-overlay-dark="6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src={logo} alt="Logo" className="res-logo" /> <br />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="res-contact section-padding">
        <div className="res-container">
          <div className="res-row res-justify-content-center">
            <div className="res-col-lg-10 res-col-md-12">
              <div className="res-form2-sidebar res-mt--240">
                <form onSubmit={handleReservation} className="res-form2">
                  <div className="res-head">
                    <div className="res-row">
                      <div className="res-col-md-12">
                        <h5>Make a reservation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="res-cont">
                    <div className="res-row">
                      {/* Room Type Field */}
                      <div className="res-col-lg-12 res-col-md-12 res-form-group">
                        <label htmlFor="roomType">Room Type:</label>
                        <select
                          id="roomType"
                          name="roomType"
                          required
                          value={selectedRoomType}
                          onChange={(e) => setSelectedRoomType(e.target.value)}
                          className="res-form-select"
                        >
                          <option value="">Select Room Type</option>
                          {roomTypes.map((roomType, index) => (
                            <option key={index} value={roomType.name}>
                              {roomType.name} (₹{roomType.price}/night)
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Email Field */}
                      <div className="res-col-lg-12 res-col-md-12 res-form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="res-form-input"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="res-col-lg-12 res-col-md-12 res-form-group">
                        <label htmlFor="phoneNo">Phone Number:</label>
                        <input
                          type="text"
                          id="phoneNo"
                          placeholder="Phone Number"
                          value={phoneNo}
                          onChange={(e) => setPhoneNo(e.target.value)}
                          required
                          className="res-form-input"
                        />
                      </div>

                      {/* Check-in Date Field */}
                      <div className="res-col-lg-12 res-col-md-12 res-form-group">
                        <label htmlFor="checkIn">Check-in Date:</label>
                        <input
                          type="date"
                          id="checkIn"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          required
                          className="res-form-input"
                          min={new Date().toISOString().split("T")[0]} // Prevent past dates
                        />
                      </div>

                      {/* Check-out Date Field */}
                      <div className="res-col-lg-12 res-col-md-12 res-form-group">
                        <label htmlFor="checkOut">Check-out Date:</label>
                        <input
                          type="date"
                          id="checkOut"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          required
                          className="res-form-input"
                          min={checkIn || new Date().toISOString().split("T")[0]} // Prevent past dates
                        />
                      </div>

                      {/* Stay Duration Display */}
                      <div className="res-col-lg-12 res-col-md-12">
                        <h6 className="res-stay-duration">
                          Stay Duration: {stayDuration} day(s)
                        </h6>
                      </div>

                      {/* Amenities Section */}
                      <div className="res-col-lg-12 res-col-md-12">
                        <h6 className="res-section-title">Select Amenities:</h6>
                        <div className="res-amenities-grid">
                          {amenities.map((amenity, index) => (
                            <div key={index} className="res-amenity-item">
                              <input
                                type="checkbox"
                                id={`amenity-${index}`}
                                value={amenity.name}
                                onChange={() => handleAmenityChange(amenity)}
                              />
                              <label htmlFor={`amenity-${index}`}>
                                {amenity.name} (₹{amenity.price})
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Event Venues Section */}
                      <div className="res-col-lg-12 res-col-md-12">
                        <h6 className="res-section-title">Select Event Venue:</h6>
                        <div className="res-event-venues-grid">
                          {eventVenues.map((venue, index) => (
                            <div key={index} className="res-event-venue-item">
                              <input
                                type="checkbox"
                                id={`venue-${index}`}
                                value={venue.name}
                                onChange={() => handleEventVenueChange(venue)}
                              />
                              <label htmlFor={`venue-${index}`}>
                                {venue.name} (₹{venue.price})
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Total Price Display */}
                      <div className="res-col-lg-12 res-col-md-12">
                        <h6 className="res-total-price">
                          Total Price: ₹{totalPrice}
                        </h6>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="res-col-md-12">
                          <p className="res-error-message">
                            {error}
                          </p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="res-col-md-12">
                        <button
                          type="submit"
                          className="res-submit-button"
                        >
                          Proceed to pay
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Login Link */}
              <div className="res-text-center res-mt-4">
                <p>
                  Already made a reservation? <a href="/">Go to Home!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reservation;