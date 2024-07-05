import React from 'react';
import './AirportDetails.css';

const AirportDetails = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h3>hava havai</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li>Services</li>
          <li><a href="#">Airports</a></li>
          <li><a href="#">Videos</a></li>
          <li>Others</li>
          <li><a href="#">List 1</a></li>
          <li><a href="#">List 2</a></li>
          <li><a href="#">List 3</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>Airport Details</h1>
        <div className="airport-info">
          <h2>Indra Gandhi International Airport</h2>
          <p>Country: India</p>
          <p>Code: DEL</p>
          <p>Terminals: 3</p>
        </div>
        <div className="tabs">
          <ul>
            <li><a href="#" className="active">Overview</a></li>
            <li><a href="#">Runways</a></li>
            <li><a href="#">Terminals</a></li>
            <li><a href="#">Airlines</a></li>
          </ul>
        </div>
        <div className="tab-content">
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </div>
    </div>
  );
};

export default AirportDetails;