import React, { useState } from 'react';
import axios from 'axios';
import './Treatment.css';

const MAX_MEDICINES = 20;

const Treatment = ({ formData }) => {
  const [treatmentData, setTreatmentData] = useState({
    // Your existing treatmentData state remains unchanged
  });

  // Separate state variables for each column
  const [medicineNames, setMedicineNames] = useState(Array(MAX_MEDICINES).fill(''));
  const [dosages, setDosages] = useState(Array(MAX_MEDICINES).fill(''));
  const [days, setDays] = useState(Array(MAX_MEDICINES).fill(''));

  const handleAddMedicine = () => {
    if (medicineNames.includes('')) {
      // If any medicine name is empty, display an alert
      alert('Please enter medicine name for all rows.');
      return;
    }

    setMedicineNames([...medicineNames, '']);
    setDosages([...dosages, '']);
    setDays([...days, '']);
  };

  // Rest of the component code remains the same...

  const handleSaveTable = () => {
    // Combine the separate state variables into tableData
    const tableData = medicineNames.map((name, index) => ({
      medicineName: name,
      dosage: dosages[index],
      days: days[index],
    }));

    // Filter out empty rows from tableData and save the valid rows to the database
    const validMedicines = tableData.filter(
      (medicine) => medicine.medicineName !== ''
    );

    // Make a POST request to the backend API to save the medicines data
    axios
      .post('http://localhost:3001/api/doctor', {
        medicines: validMedicines,
      })
      .then((response) => {
        console.log('Medicines data saved successfully!', response.data);
        // After successful saving, you can show a success message or handle as required
      })
      .catch((error) => {
        console.error('Error saving medicines data:', error);
        // Handle the error (e.g., display an error message)
      });
  };

  return (
    <div className="form-section">
      {/* ... Rest of the component code ... */}
      <div>
        <h3>Medicine Information</h3>
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Dosage</th>
              <th>Days</th>
            </tr>
          </thead>
          <tbody>
            {medicineNames.map((name, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      const updatedNames = [...medicineNames];
                      updatedNames[index] = e.target.value;
                      setMedicineNames(updatedNames);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={dosages[index]}
                    onChange={(e) => {
                      const updatedDosages = [...dosages];
                      updatedDosages[index] = e.target.value;
                      setDosages(updatedDosages);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={days[index]}
                    onChange={(e) => {
                      const updatedDays = [...days];
                      updatedDays[index] = e.target.value;
                      setDays(updatedDays);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={handleAddMedicine}>
        Add Medicine
      </button>
      <button type="button" onClick={handleSaveTable}>
        Save Table
      </button>
    </div>
  );
};

export default Treatment;
