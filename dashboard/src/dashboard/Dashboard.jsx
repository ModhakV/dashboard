import React from 'react';
import ResponsiveDrawer from './dashside';
import BarChart from './Chart.jsx'; // Make sure the path is correct

const Dashboard = () => {
  return (
    <div>
      <ResponsiveDrawer>
        <BarChart />
      </ResponsiveDrawer>
    </div>
  );
};

export default Dashboard;
