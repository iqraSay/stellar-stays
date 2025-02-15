import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import the firebase config
import { collection, getDocs } from 'firebase/firestore';
import "../css/style.css";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.css';

const Booking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [roomTypes, setRoomTypes] = useState([]); // Room types state

  useEffect(() => {
    // Fetching room types from Firestore
    const fetchRoomTypes = async () => {
      const roomTypesCollection = collection(db, "RoomTypes");
      const roomTypesSnapshot = await getDocs(roomTypesCollection);
      const roomTypesList = roomTypesSnapshot.docs.map(doc => doc.data().Name); // Extracting the room names
      setRoomTypes(roomTypesList);
    };

    fetchRoomTypes();
  }, []);

  const handleCheckNow = async (e) => {
    e.preventDefault();

    // Fetch the selected room type
    const selectedRoomType = roomType;

    if (!selectedRoomType) {
      alert("Please select a room type.");
      return;
    }

    try {
      // Query the RoomTypes collection to find the selected room type
      const roomTypesCollection = collection(db, "RoomTypes");
      const roomTypeDoc = await getDocs(roomTypesCollection);

      let roomTypeRef = null;
      roomTypeDoc.forEach((doc) => {
        if (doc.data().Name === selectedRoomType) {
          roomTypeRef = doc;
        }
      });

      if (!roomTypeRef) {
        alert("Room type does not exist.");
        return;
      }

      // Fetch rooms for the selected room type
      const roomsSnapshot = await getDocs(collection(roomTypeRef.ref, "Rooms"));

      let roomAvailable = false;

      roomsSnapshot.forEach((doc) => {
        if (doc.data().Status === true) {
          roomAvailable = true;
        }
      });

      if (roomAvailable) {
        // If at least one room is available, redirect to the reservation page
        window.location.href = '/reservation';  // Change this URL to your actual reservation page
      } else {
        alert('Sorry, the selected room type is not available at the moment.');
      }

    } catch (error) {
      console.error("Error checking room availability: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="booking-wrapper">
        <div className="container">
          <div className="booking-inner clearfix">
            <form action="#" className="form1 clearfix" onSubmit={handleCheckNow}>
              <div className="col1 c1">
                <div className="border-l border-b border-t border-r br-5005">
                  <label>Check in</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    placeholder="Check in"
                  />
                </div>
              </div>
              <div className="col1 c2">
                <div className="border-l border-b border-t border-r">
                  <label>Check out</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    placeholder="Check out"
                  />
                </div>
              </div>
              <div className="col2 c3">
                <div className="select1_wrapper border-l border-b border-t border-r">
                  <label>Adults</label>
                  <select
                    className="select2 select"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    style={{ width: "100%" }}
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                  </select>
                </div>
              </div>
              <div className="col2 c4">
                <div className="select1_wrapper border-l border-b border-t  border-r">
                  <label>Children</label>
                  <select
                    className="select2 select"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    style={{ width: "100%" }}
                  >
                    <option value="1">Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                  </select>
                </div>
              </div>
              <div className="col2 c4">
                <div className="select1_wrapper border-l border-b border-t  border-r">
                  <label>Room Type</label>
                  <select
                    className="select2 select"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    style={{ width: "100%" }}
                  >
                    <option value="">Room Type</option>
                    {roomTypes.map((roomType, index) => (
                      <option key={index} value={roomType}>
                        {roomType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col3 c6">
                <button type="submit" className="btn-form1-submit">
                  Check Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
