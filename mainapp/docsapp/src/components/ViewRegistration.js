import React from 'react';

const ViewRegistration = ({ registrationInfo }) => {
  return (
    <div>
      <h2>Registration Information</h2>
      <p>Name: {registrationInfo.name}</p>
      <p>Contact No: {registrationInfo.contactNo}</p>
      {/* Add other fields here */}
    </div>
  );
};

export default ViewRegistration;
