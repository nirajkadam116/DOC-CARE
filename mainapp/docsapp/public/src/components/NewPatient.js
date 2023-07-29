import React, { useState } from 'react';

const NewPatientForm = ({ onSave }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize the form data with empty values
    name: '',
    age: '',
    gender: '',
    weight: '',
    contactNo: '',
    address: '',
    complain: '',
    historyOfMedicine: '',
    pastIllness: '',
    familyHistory: '',
    breakfast: '',
    exercise: '',
    addictions: '',
    screenTime: '',
    sleepTime: '',
    occupation: '',
    modeOfTraveling: '',
    psychologicalStatus: '',
    menstrualCycleRegular: '',
    menstrualCycleDays: '',
    menstrualCycleColor: '',
    menstrualCyclePain: '',
    isPregnant: '',
    abortion: '',
    miscarriage: '',
    natureOfDelivery: '',
    complications: '',
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSave = () => {
    onSave(formData);
    setCurrentPage(1);
    setFormData({
      name: '',
      age: '',
      gender: '',
      weight: '',
      contactNo: '',
      address: '',
      complain: '',
      historyOfMedicine: '',
      pastIllness: '',
      familyHistory: '',
      breakfast: '',
      exercise: '',
      addictions: '',
      screenTime: '',
      sleepTime: '',
      occupation: '',
      modeOfTraveling: '',
      psychologicalStatus: '',
      menstrualCycleRegular: '',
      menstrualCycleDays: '',
      menstrualCycleColor: '',
      menstrualCyclePain: '',
      isPregnant: '',
      abortion: '',
      miscarriage: '',
      natureOfDelivery: '',
      complications: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderForm = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <h2>Personal Information</h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Contact No"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Diagnosis</h2>
            <input
              type="text"
              placeholder="Complain"
              name="complain"
              value={formData.complain}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="H/O Medicine"
              name="historyOfMedicine"
              value={formData.historyOfMedicine}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="H/O Past Illness"
              name="pastIllness"
              value={formData.pastIllness}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Family History"
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleChange}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Personal Habits</h2>
            <input
              type="text"
              placeholder="Breakfast: Yes/No"
              name="breakfast"
              value={formData.breakfast}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Exercise"
              name="exercise"
              value={formData.exercise}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Addictions"
              name="addictions"
              value={formData.addictions}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Screen Time"
              name="screenTime"
              value={formData.screenTime}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Sleep Time"
              name="sleepTime"
              value={formData.sleepTime}
              onChange={handleChange}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Occupation</h2>
            <input
              type="text"
              placeholder="Nature of Work"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Mode of Traveling"
              name="modeOfTraveling"
              value={formData.modeOfTraveling}
              onChange={handleChange}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Psychological Information</h2>
            <select
              name="psychologicalStatus"
              value={formData.psychologicalStatus}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Normal">Normal</option>
              <option value="Depression">Depression</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Stressed">Stressed</option>
              <option value="Other">Other</option>
            </select>
          </div>
        );
      case 6:
        if (formData.gender === 'Female') {
          return (
            <div>
              <h2>Gynecological Information</h2>
              <input
                type="text"
                placeholder="Menstrual Cycle Regular: Yes/No"
                name="menstrualCycleRegular"
                value={formData.menstrualCycleRegular}
                onChange={handleChange}
              />
              {/* Add more fields related to female patients */}
            </div>
          );
        }
        handleSave();
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="new-patient-form">
      {renderForm()}
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      {currentPage < 6 && (
        <button onClick={handleNextPage} disabled={currentPage === 6}>
          Next
        </button>
      )}
      {currentPage === 6 && (
        <button onClick={handleSave} disabled={currentPage === 6}>
          Save
        </button>
      )}
    </div>
  );
};

export default NewPatientForm;