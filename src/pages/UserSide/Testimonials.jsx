import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; 
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import bg from "../../assets/weddingBg.jpg";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch top 5 feedbacks from Firestore
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbacksRef = collection(db, "Feedbacks");
      const q = query(feedbacksRef, orderBy("Rating", "desc"), limit(5));
      const querySnapshot = await getDocs(q);
      const feedbacksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(feedbacksData);
    };

    fetchFeedbacks();
  }, []);

  // Render star ratings dynamically
  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? "filled" : ""}`}
        style={{
          fontSize: "24px",
          color: star <= rating ? "#E2CC80" : "#ccc",
        }}
      >
        ★
      </span>
    ));
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <section
        className="testimonials"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-img bg-fixed section-padding" data-overlay-dark="5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2>See what our visitors have to say!</h2>
                <Slider {...sliderSettings}>
                  {feedbacks.map((feedback) => (
                    <div key={feedback.id} className="item">
                      <span>{renderStars(feedback.Rating)}</span>
                      <h5>"{feedback.Review}"</h5>
                      <div className="info">
                        <div className="cont">
                          <h6>
                            {feedback.Username}{" "}
                            
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;