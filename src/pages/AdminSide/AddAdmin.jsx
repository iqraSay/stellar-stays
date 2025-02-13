import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import bg from "../../assets/FormBg2.jpg"; 
import Footer from "../../components/Footer";
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import logo from "../../assets/logo.png";
import Sidebar from './Sidebar'

const AddAdmin = () => {
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleAddAdmin = async (e) => {
    e.preventDefault();

    if (!username || !phoneNo || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      // Register user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update profile with the username
      await updateProfile(user, { displayName: username });

      // Store additional user details in Firestore
      const userRef = doc(db, "Users", user.uid);
      await setDoc(userRef, {
        Email: email,
        Password: password, 
        Role: "Admin", // Hidden and default set to "User"
        Phone_no: phoneNo,
        Username: username, 
      });

      // Redirect the user to the home page or dashboard
      navigate("/");

    } catch (error) {
      setError("Error creating account: " + error.message);
    }
  };

  return (
    <div>
      {/* Header removed, large logo added */}
      <Sidebar />
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
              <div className="subtitle">Enter dtails</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="contact section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12"> {/* Updated form to half size on large screens */}
              <div className="form2-sidebar mt--240">
                <form onSubmit={handleAddAdmin} className="form2">
                  <div className="head">
                    <div className="row">
                      <div className="col-md-12">
                        <h5>Add a new Admin</h5>
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="row">
                      {/* Username Field */}
                      <div className="col-lg-12 col-md-12 form-group">
                        <input
                          type="text"
                          placeholder="Admin Name"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
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
                        />
                      </div>

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

                      {/* Hidden Role Field */}
                      <input type="hidden" value="Admin" /> {/* Hidden role with default value "User" */}

                      {/* Submit Button */}
                      <div className="col-md-12">
                        <button type="submit" className="button-3">
                          <i className="fa-light fa-paper-plane"></i> Add Admin
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

export default AddAdmin;
