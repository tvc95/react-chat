/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';

const Dashboard = ({ id }) => {
  return (
    <div className="d-flex">
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;
