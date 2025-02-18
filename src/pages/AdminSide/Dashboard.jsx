import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Firebase configuration
import { collection, getDocs, query } from "firebase/firestore";
import {
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Bar,
  Pie,
  Scatter,
} from "recharts"; // Charting library
import "animate.css"; // Animation library
import "../../css/style.css"; // Custom CSS
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [payments, setPayments] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [rooms, setRooms] = useState([]);

  // Fetch all data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      // Fetch Users
      const usersSnapshot = await getDocs(collection(db, "Users"));
      const usersData = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);

      // Fetch Reservations
      const reservationsSnapshot = await getDocs(collection(db, "Reservations"));
      const reservationsData = reservationsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReservations(reservationsData);

      // Fetch Feedbacks
      const feedbacksSnapshot = await getDocs(collection(db, "Feedbacks"));
      const feedbacksData = feedbacksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFeedbacks(feedbacksData);

      // Fetch Payments
      const paymentsSnapshot = await getDocs(collection(db, "Payments"));
      const paymentsData = paymentsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPayments(paymentsData);

      // Fetch RoomTypes
      const roomTypesSnapshot = await getDocs(collection(db, "RoomTypes"));
      const roomTypesData = roomTypesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRoomTypes(roomTypesData);

      // Fetch Rooms (subcollection of RoomTypes)
      const roomsData = [];
      for (const roomType of roomTypesData) {
        const roomsSnapshot = await getDocs(collection(db, "RoomTypes", roomType.id, "Rooms"));
        roomsSnapshot.docs.forEach((doc) => {
          roomsData.push({ id: doc.id, ...doc.data(), RoomType: roomType.Name });
        });
      }
      setRooms(roomsData);
    };

    fetchData();
  }, []);

  // Calculate total revenue
  const totalRevenue = payments.reduce((sum, payment) => {
    const amount = parseFloat(payment.amount_paid);
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Calculate occupancy rate
  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter((room) => !room.Status).length;
  const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(2);

  // Calculate average daily rate (ADR)
  const totalNights = reservations.reduce((sum, reservation) => {
    const checkIn = new Date(reservation.Check_in);
    const checkOut = new Date(reservation.Check_out);
    const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    return sum + nights;
  }, 0);
  
  const ADR = totalNights > 0 ? totalRevenue / totalNights : 0;
  
  // Calculate RevPAR
const RevPAR = totalRooms > 0 ? totalRevenue / totalRooms : 0;

  // Prepare data for charts
  const revenueData = payments.map((payment) => ({
    date: payment.payment_date,
    revenue: payment.amount_paid,
  }));

  const bookingTrendsData = reservations.map((reservation) => ({
    date: reservation.Check_in,
    bookings: 1,
  }));

  // Prepare data for Occupancy Rate vs. Room Rate
  const occupancyRateVsRoomRateData = roomTypes.map((roomType) => {
    const roomsOfType = rooms.filter((room) => room.RoomType === roomType.Name);
    const occupiedRoomsOfType = roomsOfType.filter((room) => !room.Status).length;
    const occupancyRateOfType = ((occupiedRoomsOfType / roomsOfType.length) * 100).toFixed(2);
    return {
      roomRate: roomType.Room_price,
      occupancyRate: parseFloat(occupancyRateOfType),
    };
  });

  const feedbackRatings = feedbacks.map((feedback) => feedback.Rating);
  const averageRating = (feedbackRatings.reduce((sum, rating) => sum + rating, 0) / feedbackRatings.length).toFixed(2);

  return (
    <div className="room-management-container animate__animated animate__fadeIn">
      <Sidebar />
      <h1 className="room-management-heading">Admin Dashboard</h1>

      {/* Quick Insights */}
      <div className="insights-grid">
        <div className="insight-card">
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue}</p>
        </div>
        <div className="insight-card">
          <h3>Occupancy Rate</h3>
          <p>{occupancyRate}%</p>
        </div>
        <div className="insight-card">
          <h3>Average Daily Rate (ADR)</h3>
          <p>₹{ADR.toFixed(2)}</p>
        </div>
        <div className="insight-card">
          <h3>RevPAR</h3>
          <p>₹{RevPAR.toFixed(2)}</p>
        </div>
      </div>

      {/* Charts and Graphs */}
      <div className="charts-grid">
        {/* Revenue Monitoring */}
        <div className="chart-card">
          <h3>Revenue Monitoring</h3>
          <LineChart width={400} height={300} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#E2CC80" />
          </LineChart>
        </div>

        {/* Booking Trends */}
        <div className="chart-card">
          <h3>Booking Trends</h3>
          <BarChart width={400} height={300} data={bookingTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#E2CC80" />
          </BarChart>
        </div>

        {/* Occupancy Rate vs. Room Rate */}
        <div className="chart-card">
          <h3>Occupancy Rate vs. Room Rate</h3>
          <ScatterChart width={400} height={300} data={occupancyRateVsRoomRateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="roomRate"
              name="Room Rate"
              unit="₹"
              domain={[0, "dataMax + 1000"]}
            />
            <YAxis
              type="number"
              dataKey="occupancyRate"
              name="Occupancy Rate"
              unit="%"
              domain={[0, 100]}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Rooms" dataKey="occupancyRate" fill="#E2CC80" />
          </ScatterChart>
          <p className="chart-insight">
            Insights: Higher room rates may lead to lower occupancy rates, while lower rates can increase occupancy.
          </p>
        </div>

        {/* Feedback Ratings */}
        <div className="chart-card">
          <h3>Feedback Ratings</h3>
          <p>Average Rating: {averageRating}</p>
          <ScatterChart width={400} height={300} data={feedbacks.map((fb) => ({ rating: fb.Rating }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Scatter dataKey="rating" fill="#E2CC80" />
          </ScatterChart>
        </div>
      </div>

      {/* Real-time Alerts */}
      <div className="alerts-section">
        <h3>Real-time Alerts</h3>
        <ul>
          {rooms
            .filter((room) => room.Status === false)
            .map((room) => (
              <li key={room.id}>Room {room.Room_no} is occupied.</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;