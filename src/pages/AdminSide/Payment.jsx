import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Firebase configuration
import { collection, getDocs } from "firebase/firestore";
import "../../css/style.css"; // Custom CSS
import Sidebar from "./Sidebar";

const Payment = () => {
  const [payments, setPayments] = useState([]);

  // Fetch payments from Firestore
  useEffect(() => {
    const fetchPayments = async () => {
      const paymentsSnapshot = await getDocs(collection(db, "Payments"));
      const paymentsData = paymentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPayments(paymentsData);
    };

    fetchPayments();
  }, []);

  return (
    <div className="room-management-container animate__animated animate__fadeIn">
      <Sidebar />
      <h1 className="room-management-heading">Payment Details</h1>

      {/* Payment Table */}
      <table className="rooms-table">
        <thead>
          <tr>
            <th className="table-header">Payment ID</th>
            <th className="table-header">Reservation ID</th>
            <th className="table-header">Amount Paid (₹)</th>
            <th className="table-header">Payment Date</th>
            <th className="table-header">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="table-row">
              <td className="table-data">{payment.payment_id}</td>
              <td className="table-data">{payment.reservation_id}</td>
              <td className="table-data">{payment.amount_paid}</td>
              <td className="table-data">{payment.payment_date}</td>
              <td className="table-data">{payment.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;