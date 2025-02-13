import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Admin Dashboard</h2>
      <p>This is where you can view key metrics like Revenue, Occupancy Rates, and more.</p>

      {/* Dashboard-specific content */}
      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Revenue</h3>
          <p>50,000</p>
        </div>
        <div className="stat-box">
          <h3>Occupancy Rate</h3>
          <p>85%</p>
        </div>
        <div className="stat-box">
          <h3>Customer Feedback</h3>
          <p>4.5/5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
