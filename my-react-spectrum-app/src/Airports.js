import React from 'react';
import './Airports.css';

const Airports = () => {
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
        <h1>Airports</h1>
        <div className="add-button">+ Add new</div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Airport</th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td>
              <td>All Airports↓</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Indra Gandhi International Airport</td>
              <td>India</td>
              <td>DEL</td>
              <td>3</td>
              <td><span className="edit"></span><span className="delete"></span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Dubai International Airport</td>
              <td>UAE</td>
              <td>DXB</td>
              <td>5</td>
              <td><span className="edit"></span><span className="delete"></span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Heathrow Airport</td>
              <td>England</td>
              <td>LHR</td>
              <td>6</td>
              <td><span className="edit"></span><span className="delete"></span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Istanbul Airport</td>
              <td>Turkey</td>
              <td>IST</td>
              <td>3</td>
              <td><span className="edit"></span><span className="delete"></span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Rajiv Gandhi International Airport</td>
              <td>Texas</td>
              <td>DFW</td>
              <td>14</td>
              <td><span className="edit"></span><span className="delete"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Airports;