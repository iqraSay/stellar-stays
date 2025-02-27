import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, updateDoc, collection, addDoc, getDocs } from "firebase/firestore";
import Footer from "../../components/Footer";
import html2pdf from "html2pdf.js";
import "../../css/style.css";
import bg from '../../assets/contact2.jpg';
import logo from '../../assets/logo.png';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice, reservationDetails } = location.state || {};
  const [showInvoice, setShowInvoice] = useState(false);

  // Handle payment confirmation
  const handlePayment = async () => {
    try {
      // Update the reservation status to "confirmed"
      const reservationRef = doc(db, "Reservations", reservationDetails.Reservation_id);
      await updateDoc(reservationRef, {
        Status: "confirmed",
      });

      // Generate payment details
      const today = new Date();
      const paymentDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      const paymentsRef = collection(db, "Payments");
      const querySnapshot = await getDocs(paymentsRef);
      const serialNumber = querySnapshot.size + 1; // Next serial number
      const paymentId = `p${serialNumber}${today.getDate()}${today.getMonth() + 1}${today.getFullYear()}`;

      // Save payment details to Firestore
      await addDoc(paymentsRef, {
        payment_id: paymentId,
        reservation_id: reservationDetails.Reservation_id,
        amount_paid: totalPrice,
        payment_date: paymentDate,
        payment_status: "paid",
      });

      // Show the invoice
      setShowInvoice(true);
    } catch (error) {
      console.error("Error confirming payment: ", error);
    }
  };

  // Redirect to home after payment
  const handleRedirect = () => {
    navigate("/");
  };

  // Generate and download the invoice as PDF
  const downloadInvoice = () => {
    const invoiceElement = document.getElementById("invoice-content");

    // Ensure the element is visible
    invoiceElement.style.display = "block";

    // Options for the PDF
    const options = {
      margin: 10,
      filename: `invoice_${reservationDetails.Reservation_id}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Add a small delay to ensure the content is fully rendered
    setTimeout(() => {
      html2pdf()
        .from(invoiceElement)
        .set(options)
        .save()
        .then(() => {
          // Hide the element after PDF generation (optional)
          invoiceElement.style.display = "none";
        });
    }, 500); // 500ms delay
  };

  if (!reservationDetails) {
    return (
      <div className="res-container">
        <h2 className="res-error-message">No reservation details found. Please go back and try again.</h2>
      </div>
    );
  }

  return (
    <div>
      <section
        className="res-banner-header bg-img bg-fixed"
        data-overlay-dark="6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: '50%'
        }}
      >
        <div className="res-container">
          <div className="res-row">
            <div className="res-col-md-12 res-text-center">
              <img src={logo} alt="Logo" className="res-logo" /> <br />
              <div className="res-subtitle">Complete your payment</div>
              <div className="res-title">Payment Form</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="res-contact res-section-padding">
        <div className="res-container">
          <div className="res-row res-justify-content-center">
            <div className="res-col-lg-8 res-col-md-12">
              <div className="res-form2-sidebar res-mt--240">
                <div className="res-form2">
                  <div className="res-head">
                    <div className="res-row">
                      <div className="res-col-md-12">
                        <h5>Payment Details</h5>
                      </div>
                    </div>
                  </div>
                  <div className="res-cont">
                    <div className="res-row">
                      {/* Reservation Details */}
                      <div className="res-col-lg-12 res-col-md-12">
                        <h6 className="res-section-title">Reservation Summary</h6>
                        <p className="res-text">
                          <strong>Room Type:</strong> {reservationDetails.Room_type}
                        </p>
                        <p className="res-text">
                          <strong>Check-in:</strong> {reservationDetails.Check_in}
                        </p>
                        <p className="res-text">
                          <strong>Check-out:</strong> {reservationDetails.Check_out}
                        </p>
                        <p className="res-text">
                          <strong>Stay Duration:</strong>{" "}
                          {Math.ceil(
                            (new Date(reservationDetails.Check_out) - new Date(reservationDetails.Check_in)) /
                              (1000 * 60 * 60 * 24)
                          )}{" "}
                          day(s)
                        </p>
                        <p className="res-text">
                          <strong>Amenities:</strong> {reservationDetails.Amenities || "None"}
                        </p>
                        <p className="res-text">
                          <strong>Event Venue:</strong> {reservationDetails.Event_venue || "None"}
                        </p>
                        <p className="res-text">
                          <strong>Total Price:</strong> ₹{totalPrice}
                        </p>
                      </div>

                      {/* Pay Button */}
                      <div className="res-col-md-12">
                        <button
                          className="res-submit-button"
                          onClick={handlePayment}
                        >
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invoice Modal */}
      {showInvoice && (
        <div className="res-modal-overlay">
          <div className="res-modal-content">
            <h2 className="res-modal-heading">Invoice</h2>
            <div id="invoice-content" className="res-invoice-details">
              <p className="res-text">
                <strong>Reservation ID:</strong> {reservationDetails.Reservation_id}
              </p>
              <p className="res-text">
                <strong>Room Type:</strong> {reservationDetails.Room_type}
              </p>
              <p className="res-text">
                <strong>Check-in:</strong> {reservationDetails.Check_in}
              </p>
              <p className="res-text">
                <strong>Check-out:</strong> {reservationDetails.Check_out}
              </p>
              <p className="res-text">
                <strong>Stay Duration:</strong>{" "}
                {Math.ceil(
                  (new Date(reservationDetails.Check_out) - new Date(reservationDetails.Check_in)) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                day(s)
              </p>
              <p className="res-text">
                <strong>Amenities:</strong> {reservationDetails.Amenities || "None"}
              </p>
              <p className="res-text">
                <strong>Event Venue:</strong> {reservationDetails.Event_venue || "None"}
              </p>
              <p className="res-text">
                <strong>Total Price:</strong> ₹{totalPrice}
              </p>
            </div>
            {/* <button
              className="res-submit-button"
              onClick={downloadInvoice}
            >
              Download Invoice
            </button> */}
            <button
              className="res-submit-button"
              onClick={handleRedirect}
              style={{ marginTop: "10px" }}
            >
              Return to Home
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Payment;