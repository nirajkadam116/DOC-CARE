import React, { useState } from 'react';

const DiagnosisForm = () => {
  const [patientId, setPatientId] = useState('');
  const [presentComplaints, setPresentComplaints] = useState('');
  const [historyOfMedicines, setHistoryOfMedicines] = useState('');
  const [historyOfIllness, setHistoryOfIllness] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [exercise, setExercise] = useState('');
  const [addiction, setAddiction] = useState('');
  const [travel, setTravel] = useState('');
  const [screenTime, setScreenTime] = useState('');
  const [sleepTime, setSleepTime] = useState('');
  const [gender, setGender] = useState('');
  const [psychological, setPsychological] = useState('');
  const [gynecological, setGynecological] = useState(false);
  const [menstrualCycle, setMenstrualCycle] = useState({
    duration: '',
    regularity: '',
    color: '',
    pain: ''
  });

  const handlePatientIdChange = (e) => {
    setPatientId(e.target.value);
  };

  const handlePresentComplaintsChange = (e) => {
    setPresentComplaints(e.target.value);
  };

  const handleHistoryOfMedicinesChange = (e) => {
    setHistoryOfMedicines(e.target.value);
  };

  const handleHistoryOfIllnessChange = (e) => {
    setHistoryOfIllness(e.target.value);
  };

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.value);
  };

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleAddictionChange = (e) => {
    setAddiction(e.target.value);
  };

  const handleTravelChange = (e) => {
    setTravel(e.target.value);
  };

  const handleScreenTimeChange = (e) => {
    setScreenTime(e.target.value);
  };

  const handleSleepTimeChange = (e) => {
    setSleepTime(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    if (e.target.value === 'female') {
      setGynecological(true);
    } else {
      setGynecological(false);
      setMenstrualCycle({
        duration: '',
        regularity: '',
        color: '',
        pain: ''
      });
    }
  };

  const handlePsychologicalChange = (e) => {
    setPsychological(e.target.value);
  };

  const handleMenstrualCycleChange = (e) => {
    setMenstrualCycle((prevCycle) => ({
      ...prevCycle,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data or perform further actions
    const diagnosisData = {
      patientId,
      presentComplaints,
      historyOfMedicines,
      historyOfIllness,
      personalHabits: {
        breakfast,
        exercise,
        addiction,
        travel,
        screenTime,
        sleepTime
      },
      psychological,
      gynecological: gynecological ? menstrualCycle : null
    };
    console.log(diagnosisData);
    // Reset the form fields
    setPatientId('');
    setPresentComplaints('');
    setHistoryOfMedicines('');
    setHistoryOfIllness('');
    setBreakfast('');
    setExercise('');
    setAddiction('');
    setTravel('');
    setScreenTime('');
    setSleepTime('');
    setGender('');
    setPsychological('');
    setGynecological(false);
    setMenstrualCycle({
      duration: '',
      regularity: '',
      color: '',
      pain: ''
    });
  };

  return (
    <div>
      <h2>Add Patient Diagnosis</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="text"
            id="patientId"
            value={patientId}
            onChange={handlePatientIdChange}
          />
        </div>
        <div>
          <label htmlFor="presentComplaints">Present Complaints:</label>
          <textarea
            id="presentComplaints"
            value={presentComplaints}
            onChange={handlePresentComplaintsChange}
          />
        </div>
        <div>
          <label htmlFor="historyOfMedicines">H/O Medicines:</label>
          <textarea
            id="historyOfMedicines"
            value={historyOfMedicines}
            onChange={handleHistoryOfMedicinesChange}
          />
        </div>
        <div>
          <label htmlFor="historyOfIllness">H/O Illness:</label>
          <textarea
            id="historyOfIllness"
            value={historyOfIllness}
            onChange={handleHistoryOfIllnessChange}
          />
        </div>
          <label htmlFor="personalHabits">Personal Habits:</label>
          <div>
            <label htmlFor="breakfast">Breakfast:</label>
            <input
              type="text"
              id="breakfast"
              value={breakfast}
              onChange={handleBreakfastChange}
            />
          </div>
          <div>
            <label htmlFor="exercise">Exercise:</label>
            <input
              type="text"
              id="exercise"
              value={exercise}
              onChange={handleExerciseChange}
            />
          </div>
          <div>
            <label htmlFor="addiction">Addiction:</label>
            <input
              type="text"
              id="addiction"
              value={addiction}
              onChange={handleAddictionChange}
            />
          </div>
          <div>
            <label htmlFor="travel">Travel:</label>
            <input
              type="text"
              id="travel"
              value={travel}
              onChange={handleTravelChange}
            />
          </div>
          <div>
            <label htmlFor="screenTime">Screen Time:</label>
            <input
              type="text"
              id="screenTime"
              value={screenTime}
              onChange={handleScreenTimeChange}
            />
          </div>
          <div>
            <label htmlFor="sleepTime">Sleep Time:</label>
            <input
              type="text"
              id="sleepTime"
              value={sleepTime}
              onChange={handleSleepTimeChange}
            />
          </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="psychological">Psychological:</label>
          <textarea
            id="psychological"
            value={psychological}
            onChange={handlePsychologicalChange}
          />
        </div>
        {gynecological && (
          <div>
            <h3>Menstrual Cycle</h3>
            <div>
              <label htmlFor="duration">Duration of Period:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={menstrualCycle.duration}
                onChange={handleMenstrualCycleChange}
              />
            </div>
            <div>
              <label htmlFor="regularity">Regularity:</label>
              <input
                type="text"
                id="regularity"
                name="regularity"
                value={menstrualCycle.regularity}
                onChange={handleMenstrualCycleChange}
              />
            </div>
            <div>
              <label htmlFor="color">Color:</label>
              <input
                type="text"
                id="color"
                name="color"
                value={menstrualCycle.color}
                onChange={handleMenstrualCycleChange}
              />
            </div>
            <div>
              <label htmlFor="pain">Pain:</label>
              <input
                type="text"
                id="pain"
                name="pain"
                value={menstrualCycle.pain}
                onChange={handleMenstrualCycleChange}
              />
            </div>
          </div>
        )}
        <button type="submit">Save Diagnosis</button>
      </form>

    </div>
  );
};

export default DiagnosisForm;
