import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/FormBg2.jpg"; 
import Footer from "../../components/Footer";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    try {
      // Login user with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to the home page or dashboard after successful login
      navigate("/");

    } catch (error) {
      setError("Error logging in: " + error.message);
    }
  };

  return (
    <div>
      {/* Header removed, large logo added */}
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
              <div className="subtitle">Welcome back!</div>
              <div className="title">Login</div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12"> {/* Updated form to half size on large screens */}
              <div className="form2-sidebar mt--240">
                <form onSubmit={handleLogin} className="form2">
                  <div className="head">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Login</h5>
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="row">
                      {/* Email Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Password Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="col-md-12">
                          <p className="error-message">{error}</p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="col-md-12">
                        <button type="submit" className="button-3">
                          <i className="fa-light fa-paper-plane"></i> Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Signup Link */}
              <div className="text-center mt-4">
                <p>
                  Don't have an account? <a href="/signup">Sign up!</a>
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

export default Login;
