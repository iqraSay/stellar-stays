import React from 'react';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddAdmin from './AddAdmin';

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/rooms" element={<RoomManagement />} />
          <Route path="/admin/reservations" element={<ReservationManagement />} />
          <Route path="/admin/reports" element={<RevenueReports />} />
          <Route path="/admin/customers" element={<CustomerManagement />} />
          <Route path="/admin/admins" element={<AdminManagement />} />
          <Route path="/admin/room-types" element={<RoomTypeManagement />} />
          <Route path="/admin/add-admin" element={<AddAdmin />} />
          <Route path="/admin/logout" element={<Logout />} />
          
        </Routes>
      </div>
    </div>
  );
};

const RoomManagement = () => <div>Room Management Content</div>;
const ReservationManagement = () => <div>Reservation Management Content</div>;
const RevenueReports = () => <div>Revenue Reports Content</div>;
const CustomerManagement = () => <div>Customer Management Content</div>;
const AdminManagement = () => <div>Admin Management Content</div>;
const RoomTypeManagement = () => <div>Room Type Management Content</div>;
const Logout = () => <div>Logging Out...</div>;

export default AdminLayout;
