import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditForm from './EditForm';
import Treatment from './Treatment';
import './PatientDetails.css';

const PatientDetails = () => {
  const [searchValue, setSearchValue] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isTreatmentMode, setIsTreatmentMode] = useState(false);

  const [treatmentData, setTreatmentData] = useState([]);



  useEffect(() => {
    if (patientData) {
      // Fetch treatments for the patient when patientData is available
      fetch(`http://localhost:3001/api/doctor/${patientData.id}`)
        .then((response) => response.json())
        .then((data) => {
          setTreatmentData(data);
        })
        .catch((error) => {
          console.error('Error fetching doctor:', error);
        });
    }
  }, [patientData]);


  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Send a GET request to fetch patient data based on the search value
    fetch(`http://localhost:3001/api/doctor?name=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPatientData(data[0]);
        } else {
          setPatientData(null);
          console.log('Patient not found');
        }
      });
  };
  const handleEditFormSave = (updatedData) => {
    // Update the patient data with the updated form data
    setPatientData(updatedData);
    setIsEditOpen(false);
    setIsEditMode(false);
  };

  /*const handleEditPatient = (patient) => {
    // Implement the logic to handle patient data editing
    // For example, you can set the isEditMode state to true
    setIsEditMode(true);
      setIsEditOpen(true);

  
  };*/
  const handleEdit = () => {
    setIsEditOpen(true);
    setIsEditMode(true);
  };

  const handleFormCancel = () => {
    setIsEditOpen(false);
    setIsEditMode(false);
  };

  const handleDeletePatient = () => {
    // Send a DELETE request to delete the patient's data
    fetch(`http://localhost:3001/api/doctor/${patientData.id}`, {
      method: 'DELETE',
    })

    
      .then((response) => {
        if (response.ok) {
          // Clear the patient data and search value
          setPatientData(null);
          setSearchValue('');
        }
      })
      .catch((error) => {
        console.error('Error deleting patient:', error);
      });
  };



  const handleSavePatient = (updatedPatientData) => {
    // Implement the logic to save the updated patient data
    // For example, you can send a PUT request to the backend server
    console.log('Save patient:', updatedPatientData);
  
    // Update the patientData state with the updated data
    setPatientData((prevData) => ({
      ...prevData,
      ...updatedPatientData,
      name: updatedPatientData.name,
      age: updatedPatientData.age,
      gender: updatedPatientData.gender,
      education: updatedPatientData.education,
      occupation: updatedPatientData.occupation,
      maritalStatus: updatedPatientData.maritalStatus,
      prakrity: updatedPatientData.prakrity,
      address: updatedPatientData.address,
      contactNo: updatedPatientData.contactNo,
      presentComplains: updatedPatientData.presentComplains,
      presentComplaintsDuration: updatedPatientData.presentComplaintsDuration,
      associatedComplaints: updatedPatientData.associatedComplaints,
      associatedComplaintsDuration: updatedPatientData.associatedComplaintsDuration,
      historyOfMedicine: updatedPatientData.historyOfMedicine,
      duration: updatedPatientData.duration,
      historyOfPastIllness: updatedPatientData.historyOfPastIllness,
      illnessDuration: updatedPatientData.illnessDuration,
      healthMaintenance: updatedPatientData.healthMaintenance,
      familyHistory: updatedPatientData.familyHistory,
      breakfastTime: updatedPatientData.breakfastTime,
      breakfastQuantity: updatedPatientData.breakfastQuantity,
      breakfastHealthy: updatedPatientData.breakfastHealthy,
      exercise: updatedPatientData.exercise,
      addictions: updatedPatientData.addictions,
      travel: updatedPatientData.travel,
      screenTime: updatedPatientData.screenTime,
      sleepTime: updatedPatientData.sleepTime,
      fastFood: updatedPatientData.fastFood,
      otherHabits: updatedPatientData.otherHabits,
      natureOfWork: updatedPatientData.natureOfWork,
      mood: updatedPatientData.mood,
      menstrualCycleDate: updatedPatientData.menstrualCycleDate,
      menstrualRegularity: updatedPatientData.menstrualRegularity,
      menstrualDays: updatedPatientData.menstrualDays,
      menstrualColor: updatedPatientData.menstrualColor,
      menstrualPain: updatedPatientData.menstrualPain,
      gravida: updatedPatientData.gravida,
      para: updatedPatientData.para,
      abortion: updatedPatientData.abortion,
      miscarriage: updatedPatientData.miscarriage,
      stillBirth: updatedPatientData.stillBirth,
      pulse: updatedPatientData.pulse,
      respirationRate: updatedPatientData.respirationRate,
      bloodPressure: updatedPatientData.bloodPressure,
      temperature: updatedPatientData.temperature,
      nadi: updatedPatientData.nadi,
      mala: updatedPatientData.mala,
      mutra: updatedPatientData.mutra,
      jiva: updatedPatientData.jiva,
      druk: updatedPatientData.druk,
      sparsha: updatedPatientData.sparsha,
      chestWall: updatedPatientData.chestWall,
      shapeOfChestWall: updatedPatientData.shapeOfChestWall,
      auscultation: updatedPatientData.auscultation,
      nose: updatedPatientData.nose,
      throat: updatedPatientData.throat,
      percussion: updatedPatientData.percussion,
      auscultationRS: updatedPatientData.auscultationRS,
      mentalStatus: updatedPatientData.mentalStatus,
      memoryLoss: updatedPatientData.memoryLoss,
      orientationTime: updatedPatientData.orientationTime,
      orientationPlace: updatedPatientData.orientationPlace,
      speech: updatedPatientData.speech,
      generalBehaviour: updatedPatientData.generalBehaviour,
      gait: updatedPatientData.gait,
      musclePower: updatedPatientData.musclePower,
      muscleTone: updatedPatientData.muscleTone,
      coOrdination: updatedPatientData.coOrdination,
      fingerNoseTest: updatedPatientData.fingerNoseTest,
      kneeHealTest: updatedPatientData.kneeHealTest,
      involuntaryMovements: updatedPatientData.involuntaryMovements,
      cervicalSpine: updatedPatientData.cervicalSpine,
      spine: updatedPatientData.spine,
      shoulder: updatedPatientData.shoulder,
      elbow: updatedPatientData.elbow,
      wrist: updatedPatientData.wrist,
      hip: updatedPatientData.hip,
      knee: updatedPatientData.knee,
      ankle: updatedPatientData.ankle,
      tenderness: updatedPatientData.tenderness,
      tendonSheath: updatedPatientData.tendonSheath,
      jointCrepitus: updatedPatientData.jointCrepitus,
      SLR: updatedPatientData.SLR,
      braggardsTest: updatedPatientData.braggardsTest,
      otherExaminations: updatedPatientData.otherExaminations,
      CBC: updatedPatientData.CBC,
      urineRoutine: updatedPatientData.urineRoutine,
      liverFunctionTest: updatedPatientData.liverFunctionTest,
      kidneyFunctionTest: updatedPatientData.kidneyFunctionTest,
      sputumTest: updatedPatientData.sputumTest,
      RIPCR: updatedPatientData.RIPCR,
      XRay: updatedPatientData.XRay,
      USG: updatedPatientData.USG,
      CT: updatedPatientData.CT,
      MRI: updatedPatientData.MRI,
      bloodGlucoseLevel: updatedPatientData.bloodGlucoseLevel,
      HbA1C: updatedPatientData.HbA1C,
      vitaminB12: updatedPatientData.vitaminB12,
      fees: updatedPatientData.fees,
      consultation: updatedPatientData.consultation,
      medicines: updatedPatientData.medicines,
      panchakarma: updatedPatientData.panchakarma,
      totalAmount: updatedPatientData.totalAmount,
      nextVisit: updatedPatientData.nextVisit,
    }));

    setIsEditMode(false);
    setPatientData(false);
};

  const handleCancelEdit = () => {
    // Reset the edit mode without saving
    setIsEditMode(false);
  };

  const handleTreatment = (patient) => {
    // Navigate to the "/treatment" path with the patientData passed as state
    navigate('/treatment', { state: { patientData: patient } });
    setIsTreatmentMode(true);
  };

  return (
    <div>
      {isEditMode ? (
        // If in edit mode, show the EditForm
        <EditForm patientData={patientData} onSave={handleSavePatient} onCancel={handleCancelEdit} />
      ) : (
        // If not in edit mode, show the patient details

       
       <div>
          <h1>Basic Patient Details</h1>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search by name"
            />
            <button type="submit">Search</button>
          </form>

      {patientData && (
        <div className="table-container">
          <h2>Patient Basic Details</h2>
          <br></br>
          <table>
  <tbody>
    <tr>
      
      <td>Name:</td>
      <td>{patientData.name}</td>
    </tr>
    
    <tr>
      <td>Address:</td>
      <td>{patientData.address}</td>
    </tr>
    <tr>
      <td>Contact No:</td>
      <td>{patientData.contactNo}</td>
    </tr>
    
  </tbody>
</table>


<button onClick={() => setPatientData({ ...patientData, showDetails: true })}>View</button>
              <button onClick={() => handleTreatment(patientData)}>Treatment</button>
          {patientData.showDetails && (
            <div>
              <br></br>
              <h2>Registred Details</h2>
              
              <table>
  <tbody>
  <h2>Personal Details</h2>
    <tr>

      <td>Name:</td>
      <td>{patientData.name}</td>
    </tr>
    <tr>
      <td>Age:</td>
      <td>{patientData.age}</td>
    </tr>
    <tr>
      <td>Gender:</td>
      <td>{patientData.gender}</td>
    </tr>
    <tr>
      <td>Education:</td>
      <td>{patientData.education}</td>
    </tr>
    <tr>
      <td>Occupation:</td>
      <td>{patientData.occupation}</td>
    </tr>
    <tr>
      <td>Marital Status:</td>
      <td>{patientData.maritalStatus}</td>
    </tr>
    <tr>
      <td>Prakrity:</td>
      <td>{patientData.prakrity}</td>
    </tr>
    <tr>
      <td>Address:</td>
      <td>{patientData.address}</td>
    </tr>
    <tr>
      <td>Contact No:</td>
      <td>{patientData.contactNo}</td>
    </tr>
    <h2>Diagnosis</h2>
    <tr>
          <td>Present Complains:</td>
          <td>{patientData.presentComplains}</td>
        </tr>
    <tr>
      <td>Present Complaints Duration:</td>
      <td>{patientData.presentComplainsduration}</td>
    </tr>
    <tr>
      <td>Associated Complaints:</td>
      <td>{patientData.associatedComplains}</td>
    </tr>
    <tr>
      <td>Associated Complaints Duration:</td>
      <td>{patientData.associatedComplainsduration}</td>
    </tr>
    <h2>History</h2>
    <tr>
      <td>History of Medicine:</td>
      <td>{patientData.historyOfMedicine}</td>
    </tr>
    <tr>
  <td>Duration:</td>
  <td>{patientData.duration}</td>
</tr>
<tr>
  <td>History of Past Illness:</td>
  <td>{patientData.historyOfPastIllness}</td>
</tr>
<tr>
  <td>Illness Duration:</td>
  <td>{patientData.illnessduration}</td>
</tr>
<tr>
  <td>Health Maintenance:</td>
  <td>{patientData.healthMaintenance}</td>
</tr>
<tr>
  <td>Family History:</td>
  <td>{patientData.familyHistory}</td>
</tr>
<h2>Personal Habits</h2>
<tr>
  <td>Breakfast Time:</td>
  <td>{patientData.breakfastTime}</td>
</tr>
<tr>
  <td>Breakfast Quantity:</td>
  <td>{patientData.breakfastQuantity}</td>
</tr>
<tr>
  <td>Breakfast Healthy:</td>
  <td>{patientData.breakfastHealthy}</td>
</tr>
<tr>
  <td>Exercise:</td>
  <td>{patientData.exercise}</td>
</tr>
<tr>
  <td>Addictions:</td>
  <td>{patientData.addictions}</td>
</tr>
<tr>
  <td>Travel:</td>
  <td>{patientData.travel}</td>
</tr>
<tr>
  <td>screenTime:</td>
  <td>{patientData.screenTime}</td>
</tr>
<tr>
  <td>Sleep Time:</td>
  <td>{patientData.sleepTime}</td>
</tr>
<tr>
  <td>Fast Food:</td>
  <td>{patientData.fastfood}</td>
</tr>
<tr>
  <td>Other Habits:</td>
  <td>{patientData.otherHabits}</td>
</tr>
<h2>Occupational Details</h2>
<tr>
  <td>Nature of Work:</td>
  <td>{patientData.natureOfWork}</td>
</tr>
<tr>
  <td>Mood:</td>
  <td>{patientData.mood}</td>
</tr>
<h2>Gynaecological History</h2>
<tr>
  <td>Menstrual Cycle Date:</td>
  <td>{patientData.menstrualCycleDate}</td>
</tr>
<tr>
  <td>Menstrual Regularity:</td>
  <td>{patientData.menstrualRegularity}</td>
</tr>
<tr>
  <td>Menstrual Days:</td>
  <td>{patientData.menstrualDays}</td>
</tr>
<tr>
  <td>Menstrual Color:</td>
  <td>{patientData.menstrualColor}</td>
</tr>
<tr>
  <td>Menstrual Pain:</td>
  <td>{patientData.menstrualPain}</td>
</tr>
<tr>
  <td>Gravida:</td>
  <td>{patientData.gravida}</td>
</tr>
<tr>
  <td>Para:</td>
  <td>{patientData.para}</td>
</tr>
<tr>
  <td>Abortion:</td>
  <td>{patientData.abortion}</td>
</tr>
<tr>
  <td>Miscarriage:</td>
  <td>{patientData.miscarriage}</td>
</tr>
<tr>
  <td>Still Birth:</td>
  <td>{patientData.stillBirth}</td>
</tr>
<h2>Physical Examination</h2>
<tr>
  <td>Pulse:</td>
  <td>{patientData.pulse}</td>
</tr>
<tr>
  <td>Respiration Rate:</td>
  <td>{patientData.respirationRate}</td>
</tr>
<tr>
  <td>Blood Pressure:</td>
  <td>{patientData.bloodPressure}</td>
</tr>
<tr>
  <td>Temperature:</td>
  <td>{patientData.temperature}</td>
</tr>
<tr>
  <td>Nadi:</td>
  <td>{patientData.nadi}</td>
</tr>
<tr>
  <td>Mala:</td>
  <td>{patientData.mala}</td>
</tr>
<tr>
  <td>Mutra:</td>
  <td>{patientData.mutra}</td>
</tr>
<tr>
  <td>Jiva:</td>
  <td>{patientData.jiva}</td>
</tr>
<tr>
  <td>Druk:</td>
  <td>{patientData.druk}</td>
</tr>
<tr>
  <td>Sparsha:</td>
  <td>{patientData.sparsha}</td>
</tr>
<h2>CVS - Cardiovascular System</h2>
<tr>
  <td>Chest Wall:</td>
  <td>{patientData.chestWall}</td>
</tr>
<tr>
  <td>Shape of Chest Wall:</td>
  <td>{patientData.shapeOfChestWall}</td>
</tr>
<tr>
  <td>Auscultation:</td>
  <td>{patientData.auscultation}</td>
</tr>
<h2>R.S - Respiratory System</h2>
<tr>
  <td>Nose:</td>
  <td>{patientData.nose}</td>
</tr>
<tr>
  <td>Throat:</td>
  <td>{patientData.throat}</td>
</tr>
<tr>
  <td>Percussion:</td>
  <td>{patientData.percussion}</td>
</tr>
<tr>
  <td>Auscultation (RS):</td>
  <td>{patientData.auscultationRS}</td>
</tr>
<h2>CNS - Central Nervous System</h2>
<tr>
  <td>Mental Status:</td>
  <td>{patientData.mentalStatus}</td>
</tr>
<tr>
  <td>Memory Loss:</td>
  <td>{patientData.memoryLoss}</td>
</tr>
<tr>
  <td>Orientation (Time):</td>
  <td>{patientData.orientationTime}</td>
</tr>
<tr>
  <td>Orientation (Place):</td>
  <td>{patientData.orientationPlace}</td>
</tr>
<tr>
  <td>Speech:</td>
  <td>{patientData.speech}</td>
</tr>
<tr>
  <td>General Behaviour:</td>
  <td>{patientData.generalBehaviour}</td>
</tr>
<tr>
  <td>Gait:</td>
  <td>{patientData.gait}</td>
</tr>
<tr>
  <td>Muscle Power:</td>
  <td>{patientData.musclePower}</td>
</tr>
<tr>
  <td>Muscle Tone:</td>
  <td>{patientData.muscleTone}</td>
</tr>
<tr>
  <td>Coordination:</td>
  <td>{patientData.coOrdination}</td>
</tr>
<tr>
  <td>Finger-Nose Test:</td>
  <td>{patientData.fingerNoseTest}</td>
</tr>
<tr>
  <td>Knee-Heel Test:</td>
  <td>{patientData.kneeHealTest}</td>
</tr>
<tr>
  <td>Involuntary Movements:</td>
  <td>{patientData.involuntaryMovements}</td>
</tr>
<h2>Joint Examinations</h2>
<tr>
  <td>Cervical Spine:</td>
  <td>{patientData.cervicalSpine}</td>
</tr>
<tr>
  <td>Spine:</td>
  <td>{patientData.spine}</td>
</tr>
<tr>
  <td>Shoulder:</td>
  <td>{patientData.shoulder}</td>
</tr>
<tr>
  <td>Elbow:</td>
  <td>{patientData.elbow}</td>
</tr>
<tr>
  <td>Wrist:</td>
  <td>{patientData.wrist}</td>
</tr>
<tr>
  <td>Hip:</td>
  <td>{patientData.hip}</td>
</tr>
<tr>
  <td>Knee:</td>
  <td>{patientData.knee}</td>
</tr>
<tr>
  <td>Ankle:</td>
  <td>{patientData.ankle}</td>
</tr>
<tr>
  <td>Tenderness:</td>
  <td>{patientData.tenderness}</td>
</tr>
<h2>Crepitus</h2>
<tr>
  <td>Tendon Sheeth:</td>
  <td>{patientData.tendonSheeth}</td>
</tr>
<tr>
  <td>Joint Crepitus:</td>
  <td>{patientData.jointCrepitus}</td>
</tr>
<h2>Examinations</h2>
<tr>
  <td>SLR:</td>
  <td>{patientData.SLR}</td>
</tr>
<tr>
  <td>Braggard's Test:</td>
  <td>{patientData.braggardsTest}</td>
</tr>
<tr>
  <td>Other Examinations:</td>
  <td>{patientData.otherExaminations}</td>
</tr>
<h2>Investigations Advised</h2>

<tr>
  <td>CBC:</td>
  <td>{patientData.CBC}</td>
</tr>
<tr>
  <td>Urine Routine:</td>
  <td>{patientData.urineRoutine}</td>
</tr>
<tr>
  <td>Liver Function Test:</td>
  <td>{patientData.liverFunctionTest}</td>
</tr>
<tr>
  <td>Kidney Function Test:</td>
  <td>{patientData.kidneyFunctionTest}</td>
</tr>
<tr>
  <td>Sputum Test:</td>
  <td>{patientData.sputumTest}</td>
</tr>
<tr>
  <td>RIPCR:</td>
  <td>{patientData.RIPCR}</td>
</tr>
<tr>
  <td>X-Ray:</td>
  <td>{patientData.XRay}</td>
</tr>
<tr>
  <td>USG:</td>
  <td>{patientData.USG}</td>
</tr>
<tr>
  <td>CT:</td>
  <td>{patientData.CT}</td>
</tr>
<tr>
  <td>MRI:</td>
  <td>{patientData.MRI}</td>
</tr>
<tr>
  <td>Blood Glucose Level:</td>
  <td>{patientData.bloodGlucoseLevel}</td>
</tr>
<tr>
  <td>HbA1C:</td>
  <td>{patientData.HbA1C}</td>
</tr>
<tr>
  <td>Vitamin B12:</td>
  <td>{patientData.vitaminB12}</td>
</tr>


<h2>Treatment Plan</h2>
  <tr>
  <td>Visit Date:</td>
  <td>{patientData.date}</td>
</tr>
</tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Medicine Name</th>
      <th>Dosage</th>
      <th>Days</th>
    </tr>
  </thead>
  <tbody>
  {(() => {
    const rows = [];
    for (let i = 0; i < treatmentData.length; i++) {
      const treatment = treatmentData[i];
      const medicineNameList = treatment.medicineName.split('\n');
      const dosageList = treatment.dosage.split('\n');
      const daysList = treatment.days.split('\n');
      const maxLength = Math.max(medicineNameList.length, dosageList.length, daysList.length);

      // Pad the lists to have equal lengths
      while (medicineNameList.length < maxLength) {
        medicineNameList.push('');
      }
      while (dosageList.length < maxLength) {
        dosageList.push('');
      }
      while (daysList.length < maxLength) {
        daysList.push('');
      }

      for (let j = 0; j < maxLength; j++) {
        const medicineNameValue = medicineNameList[j];
        const dosageValue = dosageList[j];
        const daysValue = daysList[j];
        rows.push(
          <tr key={`${i}-${j}`}>
            <td>{medicineNameValue}</td>
            <td>{dosageValue}</td>
            <td>{daysValue}</td>
          </tr>
        );
      }
    }
    return rows;
  })()}
</tbody>

</table>

<table>
<tbody>
<h2>Treatment Fees & Consultation</h2>
<tr>
  <td>Consultation:</td>
  <td>{patientData.consultation}</td>
</tr> <tr>
  <td>Medicine Fees:</td>
  <td>{patientData.medicines}</td>
</tr> <tr>
  <td>Panchakarma:</td>
  <td>{patientData.panchakarma}</td>
</tr> 
<tr>
  <td>Total Amount:</td>
  <td>{patientData.totalAmount}</td>
</tr>
<tr>  
  <td>Next Visit:</td>
  <td>{patientData.nextvisit}</td>
</tr>


</tbody>
</table>



<button onClick={() => handleEdit(patientData)}>Edit</button>
<button onClick={() => handleDeletePatient(patientData)}>Delete</button>

{isTreatmentMode && <Treatment formData={patientData} />}
</div>

              )}
            </div>
          )}
        </div>
        

        
      )}
      
      
    </div>
  );
};

export default PatientDetails;