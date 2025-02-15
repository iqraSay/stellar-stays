import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import bg from "../../assets/FormBg2.jpg"; 
import Footer from "../../components/Footer";
import { db } from '../../firebase';
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import logo from "../../assets/logo.png";

const Reservation = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [reservationId, setReservationId] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    // Fetching room types from Firestore
    const fetchRoomTypes = async () => {
      const roomTypesCollection = collection(db, "RoomTypes");
      const roomTypesSnapshot = await getDocs(roomTypesCollection);
      const roomTypesList = roomTypesSnapshot.docs.map(doc => doc.data().Name);
      setRoomTypes(roomTypesList);
    };

    fetchRoomTypes();
  }, []);

  const handleReservation = async (e) => {
    e.preventDefault();

    if (!email || !phoneNo || !checkIn || !checkOut) {
      setError("All fields are required!");
      return;
    }

    try {
      // Generate reservation ID
      const reservationCountDoc = await getDocs(collection(db, "Reservations"));
      const reservationIdString = "res" + (reservationCountDoc.size + 1); // Incremental reservation ID

      // Store reservation details in Firestore
      const reservationRef = doc(db, "Reservations", reservationIdString);
      await setDoc(reservationRef, {
        Reservation_id: reservationIdString,
        Room_type: e.target.roomType.value,
        Status: "pending",
        Email: email,
        Phone: phoneNo,
        Check_in: checkIn,
        Check_out: checkOut
      });

      // Set reservationId state
      setReservationId(reservationIdString);

      // Show confirmation alert and redirect after 10 seconds
      alert("Your reservation has been made! A confirmation will be sent to your email.");
      setTimeout(() => {
        navigate("/");
      }, 5000);

    } catch (error) {
      setError("Error making reservation: " + error.message);
    }
  };

  return (
    <div>
      <section
        className="banner-header bg-img bg-fixed"
        data-overlay-dark="6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: '50%'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src={logo} alt="Logo" style={{ maxWidth: "250px", marginTop: "50px" }} /> <br />
              <div className="subtitle">Make a reservation</div>
              <div className="title">Reservation Form</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="form2-sidebar mt--240" style={{ padding: "20px" }}>
                <form onSubmit={handleReservation} className="form2">
                  <div className="head">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Reservation Form</h5>
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="row">
                      {/* Room Type Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <select
                          name="roomType"
                          required
                          style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "15px",
                            transition: "all 0.3s ease",
                            fontFamily: '"Urbanist", sans-serif',
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "#999",
                            backgroundColor: "transparent",
                            appearance: "none",
                            backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2010%2010%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23333%22%20stroke-width%3D%221.5%22%20d%3D%22M1%202l4%204-4%204%22%3E%3C/path%3E%3C/svg%3E')",
                            backgroundPosition: "right 10px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "12px",
                            paddingRight: "35px"
                          }}
                        >
                          <option value="">Select Room Type</option>
                          {roomTypes.map((roomType, index) => (
                            <option key={index} value={roomType}>
                              {roomType}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Email Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "15px",
                            transition: "all 0.3s ease",
                            fontFamily: '"Urbanist", sans-serif',
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "#999",
                            backgroundColor: "transparent"
                          }}
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          value={phoneNo}
                          onChange={(e) => setPhoneNo(e.target.value)}
                          required
                          style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "15px",
                            transition: "all 0.3s ease",
                            fontFamily: '"Urbanist", sans-serif',
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "#999",
                            backgroundColor: "transparent"
                          }}
                        />
                      </div>

                      {/* Check-in Date Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          required
                          style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "15px",
                            transition: "all 0.3s ease",
                            fontFamily: '"Urbanist", sans-serif',
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "#999",
                            backgroundColor: "transparent"
                          }}
                        />
                      </div>

                      {/* Check-out Date Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          required
                          style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            marginBottom: "15px",
                            transition: "all 0.3s ease",
                            fontFamily: '"Urbanist", sans-serif',
                            fontSize: "17px",
                            fontWeight: "400",
                            color: "#999",
                            backgroundColor: "transparent"
                          }}
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="col-md-12">
                          <p
                            className="error-message"
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "-10px",
                              marginBottom: "10px"
                            }}
                          >
                            {error}
                          </p>
                        </div>
                      )}

                      {/* Hidden Status and Reservation ID */}
                      <input type="hidden" value="pending" name="status" />
                      <input type="hidden" value={reservationId} name="reservationId" />

                      {/* Submit Button */}
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="button-3"
                          style={{
                            color: "#fff",
                            padding: "12px 20px",
                            border: "none",
                            borderRadius: "30px",
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "linear 0.3s ease",
                            background: "#E2CC80",
                            fontFamily: '"Urbanist", sans-serif',
                            fontWeight: "400"
                          }}
                        >
                          <i className="fa-light fa-paper-plane"></i> Submit Reservation
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Login Link */}
              <div className="text-center mt-4">
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
