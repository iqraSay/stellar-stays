import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "owl.carousel/dist/assets/owl.carousel.min.css"; // Owl Carousel
import "owl.carousel/dist/assets/owl.theme.default.min.css"; // Owl Carousel Theme
import "animate.css/animate.min.css"; // Animate.css
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import "select2/dist/css/select2.min.css"; // Select2
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "vegas/dist/vegas.min.css"; // Vegas Slider

import Error from './components/Error'
import Home from "./pages/UserSide/Home";
import AboutUs from "./pages/UserSide/AboutUs";
import Contact from "./pages/UserSide/Contact";
import Rooms from "./pages/UserSide/Rooms";
import Facilities from "./pages/UserSide/Facilities";
import Amenities from "./pages/UserSide/Amenities";
import EventVenue from "./pages/UserSide/EventVenue";
import SignUp from "./pages/UserSide/SignUp";
import Login from "./pages/UserSide/Login";

import Dashboard from "./pages/AdminSide/Dashboard";
import AdminLogin from "./pages/AdminSide/Login";
import AddAdmin from "./pages/AdminSide/AddAdmin";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/eventvenue" element={<EventVenue />} />
        <Route path="*" element={<Error />} />

        <Route path="/admin/add-admin" element={<AddAdmin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* <Route path="/admin/rooms" element={<RoomManagement />} />
          <Route path="/admin/reservations" element={<ReservationManagement />} />
          <Route path="/admin/reports" element={<RevenueReports />} />
          <Route path="/admin/customers" element={<CustomerManagement />} />
          <Route path="/admin/admins" element={<AdminManagement />} />
          <Route path="/admin/room-types" element={<RoomTypeManagement />} />
          <Route path="/admin/logout" element={<Logout />} /> */}
        </Routes>
      
    </div>
  );
}

export default App;
