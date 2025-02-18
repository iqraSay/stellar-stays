import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase"; // Firebase configuration
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../../components/Footer";
import "../../css/style.css";
import bg from '../../assets/FormBg2.jpg'
import logo from '../../assets/logo.png'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0); // Rating from 1 to 5
  const [review, setReview] = useState(""); // Review text
  const [username, setUsername] = useState(""); // Username fetched from the logged-in user
  const [error, setError] = useState(""); // Error message
  const [success, setSuccess] = useState(""); // Success message
  const navigate = useNavigate();

  // Fetch the username of the currently logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch the username from the Users collection
        const usersRef = collection(db, "Users");
        const q = query(usersRef, where("Email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUsername(userData.Username); // Set the username
        } else {
          setError("User not found in the database.");
        }
      } else {
        setError("You must be logged in to submit feedback.");
        navigate("/login"); // Redirect to login if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !review) {
      setError("Please provide a rating and review.");
      return;
    }

    try {
      // Generate Feedback_id in the format f<serial number><ddmmyyyy>
      const today = new Date();
      const ddmmyyyy = `${today.getDate()}${today.getMonth() + 1}${today.getFullYear()}`;
      const feedbacksRef = collection(db, "Feedbacks");
      const querySnapshot = await getDocs(feedbacksRef);
      const serialNumber = querySnapshot.size + 1; // Next serial number
      const feedbackId = `f${serialNumber}${ddmmyyyy}`;

      // Add feedback to Firestore
      await addDoc(feedbacksRef, {
        Feedback_id: feedbackId,
        Username: username,
        Rating: rating,
        Review: review,
      });

      setSuccess("Feedback submitted successfully!");
      setError("");
      setRating(0);
      setReview("");
    } catch (error) {
      setError("Error submitting feedback: " + error.message);
    }
  };

  // Render star rating input
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? "filled" : ""}`}
        onClick={() => setRating(star)}
        style={{ cursor: "pointer", fontSize: "24px", color: star <= rating ? "#E2CC80" : "#ccc" }}
      >
        ★
      </span>
    ));
  };

  return (
    <div>
      {/* Header removed, large logo added */}
      <section
        className="section-padding bg-img bg-fixed"
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
              <div className="subtitle">We hope you enjoyed your stay!</div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Form Section */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="form2-sidebar mt--240">
                <form onSubmit={handleSubmit} className="form2">
                  <div className="head">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Submit Feedback</h5>
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="row">
                      {/* Hidden Username Field */}
                      <div className="col-lg-12 col-md-12 form-group" style={{ display: "none" }}>
                        <input
                          type="text"
                          value={username}
                          readOnly
                        />
                      </div>

                      {/* Rating Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <label>Rating:</label>
                        <div>{renderStars()}</div>
                      </div>

                      {/* Review Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <label>Review:</label>
                        <textarea
                          placeholder="Write your review here..."
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                          required
                          rows="5"
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="col-md-12">
                          <p className="error-message">{error}</p>
                        </div>
                      )}

                      {/* Success Message */}
                      {success && (
                        <div className="col-md-12">
                          <p className="success-message">{success}</p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="col-md-12">
                        <button type="submit" className="button-3">
                          <i className="fa-light fa-paper-plane"></i> Submit Feedback
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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

export default FeedbackForm;