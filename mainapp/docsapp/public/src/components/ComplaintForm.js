import React, { useState } from 'react';

const ComplaintForm = ({ onSave }) => {
  const [complaint, setComplaint] = useState({
    patientId: '',
    date: '',
    complaint: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaint(prevComplaint => ({ ...prevComplaint, [name]: value }));
  };

  const handleSaveComplaint = () => {
    onSave(complaint);
    setComplaint({
      patientId: '',
      date: '',
      complaint: '',
    });
  };

  return (
    <div>
      <h2>Add Patient Complaints</h2>
      <form>
        <label htmlFor="patientId">Patient ID:</label>
        <input
          type="text"
          name="patientId"
          id="patientId"
          value={complaint.patientId}
          onChange={handleInputChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name="date"
          id="date"
          value={complaint.date}
          onChange={handleInputChange}
        />
        <label htmlFor="complaint">Complaint:</label>
        <textarea
          name="complaint"
          id="complaint"
          value={complaint.complaint}
          onChange={handleInputChange}
        ></textarea>
        <button type="button" onClick={handleSaveComplaint}>
          Save Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
