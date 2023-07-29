import React, { useState, useEffect } from 'react';
import './EditForm.css';

const EditForm = ({ patientData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(patientData);
  const [isUpdated, setIsUpdated] = useState(false);

  
  const handleInputChange = (e) => {

    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // Function to fetch the patient data when the component mounts
  useEffect(() => {
    const patientId = '1'; // Replace '1' with the actual patient ID or get it from the component props or URL params
    fetchPatientData(patientId);
  }, []);

  const calculateTotal = () => {

    const { consultation, medicines } = formData;
    const total = parseFloat(consultation) + parseFloat(medicines);
    return total.toFixed(2);
  };

  // Function to fetch patient data for a specific ID
  const fetchPatientData = (id) => {
    // Fetch the patient data from the backend and set it to the state
    fetch(`http://localhost:3001/api/doctor/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching patient data:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contact } = formData;


  
      const totalAmount = calculateTotal();
      const dataToSend = { ...formData, totalAmount
 };

    // Send the updated form data to the backend server
    fetch(`http://localhost:3001/api/doctor/${patientData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })

      .then((response) => {
        if (response.ok) {
          // Handle the successful update
          setIsUpdated(true);
          onSave(formData);
        }
      })
      .catch((error) => {
        console.error('Error updating patient data:', error);
      });
  };

  const handleFormCancel = () => {
    onCancel();

    <p>Updated successfully!</p> 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  return (
    <div className="edit-form-container">
      {isUpdated ? (
        <p>Updated successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="caseNumber">Case Number:</label></td>
              <td>
                <input
                  type="text"
                  id="caseNumber"
                  value={formData.caseNumber}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            
            <tr>
              <td><label htmlFor="name">Name:</label></td>
              <td>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="age">Age:</label></td>
              <td>
                <input
                  type="text"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="gender">Gender:</label></td>
              <td>
                <input
                  type="text"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="education">Education:</label></td>
              <td>
                <input
                  type="text"
                  id="education"
                  value={formData.education}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="occupation">Occupation:</label></td>
              <td>
                <input
                  type="text"
                  id="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="maritalStatus">Marital Status:</label></td>
              <td>
                <input
                  type="text"
                  id="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="prakrity">Prakrity:</label></td>
              <td>
                <input
                  type="text"
                  id="prakrity"
                  value={formData.prakrity}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="address">Address:</label></td>
              <td>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="contactNo">Contact No:</label></td>
              <td>
                <input
                  type="text"
                  id="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="presentComplains">Present Complains:</label></td>
              <td>
                <textarea
                  id="presentComplains"
                  value={formData.presentComplains}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="presentComplainsduration">Present Complains Duration:</label></td>
              <td>
                <textarea
                  id="presentComplainsduration"
                  value={formData.presentComplainsduration}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="associatedComplains">Associated Complains:</label></td>
              <td>
                <textarea
                  id="associatedComplains"
                  value={formData.associatedComplains}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="associatedComplainsduration">Associated Complains Duration:</label></td>
              <td>
                <textarea
                  id="associatedComplainsduration"
                  value={formData.associatedComplainsduration}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="historyOfMedicine">History of Medicine:</label></td>
              <td>
                <textarea
                  id="historyOfMedicine"
                  value={formData.historyOfMedicine}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
      <td><label htmlFor="duration">Duration:</label></td>
      <td>
        <textarea
          id="duration"
          value={formData.duration}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="historyOfPastIllness">History of Past Illness:</label></td>
      <td>
        <textarea
          id="historyOfPastIllness"
          value={formData.historyOfPastIllness}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="illnessduration">Illness Duration:</label></td>
      <td>
        <textarea
          id="illnessduration"
          value={formData.illnessduration}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="healthMaintenance">Health Maintenance:</label></td>
      <td>
        <textarea
          id="healthMaintenance"
          value={formData.healthMaintenance}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="familyHistory">Family History:</label></td>
      <td>
        <textarea
          id="familyHistory"
          value={formData.familyHistory}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="breakfastTime">Breakfast Time:</label></td>
      <td>
        <input
          type="text"
          id="breakfastTime"
          value={formData.breakfastTime}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="breakfastQuantity">Breakfast Quantity:</label></td>
      <td>
        <input
          type="text"
          id="breakfastQuantity"
          value={formData.breakfastQuantity}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="breakfastHealthy">Breakfast Healthy/Unhealthy:</label></td>
      <td>
        <input
          type="text"
          id="breakfastHealthy"
          value={formData.breakfastHealthy}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="exercise">Exercise:</label></td>
      <td>
        <input
          type="text"
          id="exercise"
          value={formData.exercise}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="addictions">Addictions:</label></td>
      <td>
        <input
          type="text"
          id="addictions"
          value={formData.addictions}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="travel">Traveling:</label></td>
      <td>
        <select
          id="travel"
          value={formData.travel}
          onChange={handleInputChange}
        >
          <option value="">Choose an option</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Public Transport">Public Transport</option>
        </select>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="screenTime">Screen Time:</label></td>
      <td>
        <textarea
          id="screenTime"
          value={formData.screenTime}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="sleepTime">Sleep Time:</label></td>
      <td>
        <textarea
          id="sleepTime"
          value={formData.sleepTime}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="fastfood">Fast Food Intake:</label></td>
      <td>
        <textarea
          id="fastfood"
          value={formData.fastfood}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="otherHabits">Other Habits:</label></td>
      <td>
        <textarea
          id="otherHabits"
          value={formData.otherHabits}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="natureOfWork">Nature of Work:</label></td>
      <td>
        <textarea
          id="natureOfWork"
          value={formData.natureOfWork}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="mood">Mood:</label></td>
      <td>
        <textarea
          id="mood"
          value={formData.mood}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="menstrualCycleDate">Menstrual Cycle Date:</label></td>
      <td>
        <input
          type="text"
          id="menstrualCycleDate"
          value={formData.menstrualCycleDate}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="menstrualRegularity">Menstrual Cycle Regularity:</label></td>
      <td>
        <input
          type="text"
          id="menstrualRegularity"
          value={formData.menstrualRegularity}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="menstrualDays">Menstrual Days:</label></td>
      <td>
        <input
          type="number"
          id="menstrualDays"
          value={formData.menstrualDays}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="menstrualColor">Menstrual Color:</label></td>
      <td>
        <input
          type="text"
          id="menstrualColor"
          value={formData.menstrualColor}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="menstrualPain">Menstrual Pain:</label></td>
      <td>
        <input
          type="text"
          id="menstrualPain"
          value={formData.menstrualPain}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="gravida">Gravida:</label></td>
      <td>
        <input
          type="text"
          id="gravida"
          value={formData.gravida}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="para">Para:</label></td>
      <td>
        <input
          type="text"
          id="para"
          value={formData.para}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="abortion">Abortion:</label></td>
      <td>
        <input
          type="text"
          id="abortion"
          value={formData.abortion}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="miscarriage">Miscarriage:</label></td>
      <td>
        <input
          type="text"
          id="miscarriage"
          value={formData.miscarriage}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="stillBirth">Still Birth:</label></td>
      <td>
        <input
          type="text"
          id="stillBirth"
          value={formData.stillBirth}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="pulse">Pulse:</label></td>
      <td>
        <textarea
          id="pulse"
          value={formData.pulse}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="respirationRate">Respiration Rate:</label></td>
      <td>
        <textarea
          id="respirationRate"
          value={formData.respirationRate}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="bloodPressure">Blood Pressure:</label></td>
      <td>
        <textarea
          id="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="temperature">Temperature:</label></td>
      <td>
        <textarea
          id="temperature"
          value={formData.temperature}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="nadi">Nadi:</label></td>
      <td>
        <textarea
          id="nadi"
          value={formData.nadi}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="mala">Mala:</label></td>
      <td>
        <textarea
          id="mala"
          value={formData.mala}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="mutra">Mutra:</label></td>
      <td>
        <textarea
          id="mutra"
          value={formData.mutra}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="jiva">Jiva:</label></td>
      <td>
        <textarea
          id="jiva"
          value={formData.jiva}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="druk">Druk:</label></td>
      <td>
        <textarea
          id="druk"
          value={formData.druk}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="sparsha">Sparsha:</label></td>
      <td>
        <textarea
          id="sparsha"
          value={formData.sparsha}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="chestWall">Chest Wall:</label></td>
      <td>
        <textarea
          id="chestWall"
          value={formData.chestWall}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="shapeOfChestWall">Shape of Chest Wall:</label></td>
      <td>
        <textarea
          id="shapeOfChestWall"
          value={formData.shapeOfChestWall}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="auscultation">Auscultation:</label></td>
      <td>
        <textarea
          id="auscultation"
          value={formData.auscultation}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="nose">Nose:</label></td>
      <td>
        <textarea
          id="nose"
          value={formData.nose}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="throat">Throat:</label></td>
      <td>
        <textarea
          id="throat"
          value={formData.throat}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="percussion">Percussion:</label></td>
      <td>
        <textarea
          id="percussion"
          value={formData.percussion}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="auscultationRS">Auscultation RS:</label></td>
      <td>
        <textarea
          id="auscultationRS"
          value={formData.auscultationRS}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="mentalStatus">Mental Status:</label></td>
      <td>
        <textarea
          id="mentalStatus"
          value={formData.mentalStatus}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
    <td><label htmlFor="memoryLoss">Memory Loss:</label></td>
      <td>
        <select
          id="memoryLoss"
          value={formData.memoryLoss}
          onChange={handleInputChange}
        >
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="orientationTime">Orientation Time:</label></td>
      <td>
        <textarea
          id="orientationTime"
          value={formData.orientationTime}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="orientationPlace">Orientation Place:</label></td>
      <td>
        <textarea
          id="orientationPlace"
          value={formData.orientationPlace}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="speech">Speech:</label></td>
      <td>
        <textarea
          id="speech"
          value={formData.speech}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="generalBehaviour">General Behaviour:</label></td>
      <td>
        <textarea
          id="generalBehaviour"
          value={formData.generalBehaviour}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="gait">Gait:</label></td>
      <td>
        <textarea
          id="gait"
          value={formData.gait}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="musclePower">Muscle Power:</label></td>
      <td>
        <textarea
          id="musclePower"
          value={formData.musclePower}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
    <td><label htmlFor="muscleTone">Muscle Tone:</label></td>
      <td>
        <select
          id="muscleTone"
          value={formData.muscleTone}
          onChange={handleInputChange}
        >
            <option value="">Choose an option</option>
            <option value="Hypotonia">Hypotonia</option>
            <option value="Hyper">Hyper</option>
            <option value="Rigidity">Rigidity</option>
          </select>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="coOrdination">Co-ordination:</label></td>
      <td>
        <textarea
          id="coOrdination"
          value={formData.coOrdination}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="fingerNoseTest">Finger-Nose Test:</label></td>
      <td>
        <textarea
          id="fingerNoseTest"
          value={formData.fingerNoseTest}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="kneeHealTest">Knee-Heal Test:</label></td>
      <td>
        <textarea
          id="kneeHealTest"
          value={formData.kneeHealTest}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="involuntaryMovements">Involuntary Movements:</label></td>
      <td>
        <textarea
          id="involuntaryMovements"
          value={formData.involuntaryMovements}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="cervicalSpine">Cervical Spine:</label></td>
      <td>
        <textarea
          id="cervicalSpine"
          value={formData.cervicalSpine}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="spine">Spine:</label></td>
      <td>
        <textarea
          id="spine"
          value={formData.spine}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="shoulder">Shoulder:</label></td>
      <td>
        <textarea
          id="shoulder"
          value={formData.shoulder}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="elbow">Elbow:</label></td>
      <td>
        <textarea
          id="elbow"
          value={formData.elbow}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="wrist">Wrist:</label></td>
      <td>
        <textarea
          id="wrist"
          value={formData.wrist}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="hip">Hip:</label></td>
      <td>
        <textarea
          id="hip"
          value={formData.hip}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="knee">Knee:</label></td>
      <td>
        <textarea
          id="knee"
          value={formData.knee}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="ankle">Ankle:</label></td>
      <td>
        <textarea
          id="ankle"
          value={formData.ankle}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="tenderness">Tenderness:</label></td>
      <td>
        <textarea
          id="tenderness"
          value={formData.tenderness}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="tendonSheeth">Tendon Sheeth:</label></td>
      <td>
        <textarea
          id="tendonSheeth"
          value={formData.tendonSheeth}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="jointCrepitus">Joint Crepitus:</label></td>
      <td>
        <textarea
          id="jointCrepitus"
          value={formData.jointCrepitus}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="SLR">SLR:</label></td>
      <td>
        <textarea
          id="SLR"
          value={formData.SLR}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="braggardsTest">Braggard's Test:</label></td>
      <td>
        <textarea
          id="braggardsTest"
          value={formData.braggardsTest}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="otherExaminations">Other Examinations:</label></td>
      <td>
        <textarea
          id="otherExaminations"
          value={formData.otherExaminations}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="CBC">CBC:</label></td>
      <td>
        <textarea
          id="CBC"
          value={formData.CBC}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="urineRoutine">Urine Routine:</label></td>
      <td>
        <textarea
          id="urineRoutine"
          value={formData.urineRoutine}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="liverFunctionTest">Liver Function Test:</label></td>
      <td>
        <textarea
          id="liverFunctionTest"
          value={formData.liverFunctionTest}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="kidneyFunctionTest">Kidney Function Test:</label></td>
      <td>
        <textarea
          id="kidneyFunctionTest"
          value={formData.kidneyFunctionTest}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="sputumTest">Sputum Test:</label></td>
      <td>
        <textarea
          id="sputumTest"
          value={formData.sputumTest}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="RIPCR">RIPCR:</label></td>
      <td>
        <textarea
          id="RIPCR"
          value={formData.RIPCR}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="XRay">X-Ray:</label></td>
      <td>
        <textarea
          id="XRay"
          value={formData.XRay}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="USG">USG:</label></td>
      <td>
        <textarea
          id="USG"
          value={formData.USG}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="CT">CT:</label></td>
      <td>
        <textarea
          id="CT"
          value={formData.CT}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="MRI">MRI:</label></td>
      <td>
        <textarea
          id="MRI"
          value={formData.MRI}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="bloodGlucoseLevel">Blood Glucose Level:</label></td>
      <td>
        <textarea
          id="bloodGlucoseLevel"
          value={formData.bloodGlucoseLevel}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="HbA1C">HbA1C:</label></td>
      <td>
        <textarea
          id="HbA1C"
          value={formData.HbA1C}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="vitaminB12">Vitamin B12:</label></td>
      <td>
        <textarea
          id="vitaminB12"
          value={formData.vitaminB12}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr> 
    <tr>
      <td><label htmlFor="date">Visit Date:</label></td>
      <td>
        <input
        type='date'
          id="date"
          value={formData.date}
          onChange={handleInputChange}
          ></input>
      </td>
    </tr>  
    <tr>
      <td><label htmlFor="medicineName">Medicine Name:</label></td>
      <td>
        <textarea
          id="medicineName"
          value={formData.medicineName}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="dosage">Dosage:</label></td>
      <td>
        <textarea
          id="dosage"
          value={formData.dosage}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="days">Days:</label></td>
      <td>
        <textarea
          id="days"
          value={formData.days}
          onChange={handleInputChange}
        ></textarea>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="panchakarma">Panchakarma:</label></td>
      <td>
        <select
          id="panchakarma"
          value={formData.panchakarma}
          onChange={handleInputChange}
        >
          <option value="">Choose an option</option>
          <option value="Vaman">Vaman</option>
          <option value="Vireehana">Vireehana</option>
          <option value="Basti">Basti</option>
          <option value="Nasya">Nasya</option>
          <option value="Raktamakshan">Raktamakshan</option>
          <option value="Kati basti">Kati basti</option>
          <option value="Hrud basti">Hrud basti</option>
          <option value="Snehan">Snehan</option>
          <option value="Swedan">Swedan</option>
          <option value="Shirodhara">Shirodhara</option>
          <option value="Uttarbasti">Uttarbasti</option>
          <option value="Yonidhavan">Yonidhavan</option>
          <option value="Yonipichu">Yonipichu</option>
        </select>
      </td>
    </tr>
    <tr>
      <td><label htmlFor="consultation">Consultation:</label></td>
      <td>
        <input
          type="varchar"
          id="consultation"
          value={formData.consultation}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="medicines">Medicines:</label></td>
      <td>
        <input
          type="varchar"
          id="medicines"
          value={formData.medicines}
          onChange={handleInputChange}
        />
      </td>
    </tr>

    <tr>
      <td><label htmlFor="totalAmount">Total Amount:</label></td>
      <td>
        <input
        type="number"
          id="totalAmount"
          value={calculateTotal()} // Use toFixed(2) to display the total with two decimal places
          readOnly
        />
      </td>
    </tr>


    <tr>
      <td><label htmlFor="nextvisit">Next visit:</label></td>
      <td>
        <input
          type="varchar"
          id="nextvisit"
          value={formData.nextvisit}
          onChange={handleInputChange}
        />
      </td>
    </tr>
    
            <tr>
              <td colSpan="2">
                <button type="submit">Save</button>
                <button type="button" onClick={handleFormCancel}>Cancel</button>
                
              </td>
            </tr>
          </tbody>
        </table>
        {isUpdated && <p>Form data has been updated!</p>}
        </form>
      )}
    </div>
  );
};

export default EditForm;