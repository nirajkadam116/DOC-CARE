import React from 'react';

const Home = ({ patients, showRecentPatients }) => {
  return (
    <div>
      <h2>Recent Patients</h2>
      {patients.length === 0 ? (
        <p>No patients available.</p>
      ) : (
        <ul>
          {patients.map(patient => (
            <li key={patient.id}>
              <span>{patient.date}</span>
              <span>{patient.id}</span>
              <span>{patient.name}</span>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {showRecentPatients && (
        <div>
          {/* Display additional recent patient information */}
        </div>
      )}
    </div>
  );
};

export default Home;
