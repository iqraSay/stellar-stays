import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import Sidebar from './Sidebar';
import "../../css/style.css";

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all"); // Filter by status

  // Fetch all reservations
  useEffect(() => {
    const fetchReservations = async () => {
      const querySnapshot = await getDocs(collection(db, "Reservations"));
      const reservationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservations(reservationsData);
    };
    fetchReservations();
  }, []);

  // Handle status update to "cancelled"
  const handleCancelReservation = async (reservationId) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      await updateDoc(doc(db, "Reservations", reservationId), {
        Status: "cancelled",
      });
      setReservations(
        reservations.map((reservation) =>
          reservation.id === reservationId
            ? { ...reservation, Status: "cancelled" }
            : reservation
        )
      );
    }
  };

  // Handle reservation deletion
  const handleDeleteReservation = async (reservationId) => {
    if (window.confirm("Are you sure you want to delete this reservation?")) {
      await deleteDoc(doc(db, "Reservations", reservationId));
      setReservations(reservations.filter((reservation) => reservation.id !== reservationId));
    }
  };

  // Filter reservations by status
  const filteredReservations = reservations.filter((reservation) => {
    if (filterStatus === "all") return true;
    return reservation.Status === filterStatus;
  });

  return (
    <div className="room-management-container">
      <Sidebar />
      <h1 className="room-management-heading">Reservation Management</h1>

      {/* Filter by Status */}
      <div className="room-type-selector">
        <label className="room-type-label" htmlFor="status-filter">
          Filter by Status:
        </label>
        <select
          className="room-type-select"
          id="status-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Reservations Table */}
      <table className="rooms-table">
        <thead>
          <tr>
            <th className="table-header">Reservation ID</th>
            <th className="table-header">Room Type</th>
            <th className="table-header">Check-in</th>
            <th className="table-header">Check-out</th>
            <th className="table-header">Status</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map((reservation) => (
            <tr key={reservation.id} className="table-row">
              <td className="table-data">{reservation.Reservation_id}</td>
              <td className="table-data">{reservation.Room_type}</td>
              <td className="table-data">{reservation.Check_in}</td>
              <td className="table-data">{reservation.Check_out}</td>
              <td className="table-data">{reservation.Status}</td>
              <td className="table-data">
                {reservation.Status !== "cancelled" && (
                  <button
                    className="cancel-button"
                    onClick={() => handleCancelReservation(reservation.id)}
                  >
                    Cancel
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteReservation(reservation.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationManagement;