
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import PatientDetails from './components/PatientDetails'; 
import Treatment from './components/Treatment';
import './App'
const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegistration = (user) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, user]);
  };
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home registeredUsers={registeredUsers} />}
        />
        <Route
          exact
          path="/RegistrationForm"
          element={
            <RegistrationForm
              onRegistration={handleRegistration}
            />
          }
        />
        <Route exact path="/patientdetails" element={<PatientDetails />} />
        <Route path="/treatment" element={<Treatment />} />
      </Routes>
    </Router>
  );
};

export default App;