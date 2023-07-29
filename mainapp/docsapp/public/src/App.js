import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import NewPatient from './components/NewPatient';

import DiagnosisForm from './components/DiagnosisForm';

function App() {
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [showDiagnosisForm, setShowDiagnosisForm] = useState(false);
  const [showRecentPatients, setShowRecentPatients] = useState(false);
  const [patients, setPatients] = useState([]);
  const [searchPatientId, setSearchPatientId] = useState('');

  const handleNewPatientClick = () => {
    setShowNewPatientForm(true);
    setShowDiagnosisForm(false);
    setShowRecentPatients(false);
  };


  const handleDiagnosisClick = () => {
    setShowDiagnosisForm(true);
    setShowNewPatientForm(false);
    setShowRecentPatients(false);
  };

  const handleHomeClick = () => {
    setShowRecentPatients(true);
    setShowNewPatientForm(false);
    setShowDiagnosisForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchPatientId(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
    // For example, filter the patients based on the searchPatientId value
    const filteredPatients = patients.filter(
      (patient) => patient.id === searchPatientId
    );
    // Update the state or perform further actions with the filteredPatients
    console.log(filteredPatients);
  };

  const handleSavePatient = (newPatient) => {
    setPatients((prevPatients) => [...prevPatients, newPatient]);
    setShowNewPatientForm(false);
  };

  return (
    <div>
      <nav>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by patient ID"
            value={searchPatientId}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div>
      <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleNewPatientClick}>New Patient</button>
        <button onClick={handleDiagnosisClick}>Diagnosis</button>
        <button onClick={handleHomeClick}>Treatment Plan</button>
      </div>
      {showNewPatientForm ? (
        <NewPatient onSave={handleSavePatient} />
      ) 
      : showDiagnosisForm ? (
        <DiagnosisForm />
      ) : (
        <Home patients={patients} showRecentPatients={showRecentPatients} />
      )}
    </div>
  );
}

export default App;
