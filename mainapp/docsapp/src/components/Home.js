import React, { useState,useEffect } from 'react';
import EditForm from './EditForm';
import './Home.css';
import axios from 'axios';


const Home = ({ registeredUsers }) => {
  const [searchValue, setSearchValue] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewClicked, setIsViewClicked] = useState(false); 

 
  return (
    <div>
      <h1>Your Journey to Holistic Well-being Begins Here!"</h1>
      <br></br>
      <br></br>
      <h2>Recent Registered Users</h2>
      {registeredUsers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact No</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.contactNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users registered yet.</p>
      )}
    </div>
  );
};

export default Home;


