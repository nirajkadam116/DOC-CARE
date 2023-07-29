import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';





const RegistrationForm = ({ onRegistration }) => {

  const [patientName, setPatientName] = useState('');
  const [patientContact, setPatientContact] = useState('');
  const navigate = useNavigate();

  
  const [currentPage, setCurrentPage] = useState(1);
  

  const [formData, setFormData] = useState({

      caseNumber  :'',
      name  :'',
      age  :'',
      gender  :'',
      education  :'',
      occupation :'',
      maritalStatus  :'',
      prakrity  :'',
      address  :'',
      contactNo :'',
      presentComplains  :'',
      presentComplainsduration  :'',
      associatedComplains  :'',
      associatedComplainsduration  :'',
      historyOfMedicine  :'',
      duration  :'',
      historyOfPastIllness  :'',
      illnessduration  :'',
      healthMaintenance  :'',
      familyHistory  :'',
      breakfastTime  :'',
      breakfastQuantity  :'',
      breakfastHealthy  :'',
      exercise  :'',
      addictions :'',
      travel  :'',
      screenTime  :'',
      sleepTime  :'',
      fastfood  :'',
      otherHabits  :'',
      natureOfWork  :'',
      mood  :'',
      menstrualCycleDate  :'',
      menstrualRegularity  :'',
      menstrualDays  :'',
      menstrualColor  :'',
      menstrualPain  :'',
      gravida  :'',
      para  :'',
      abortion  :'',
      miscarriage  :'',
      stillBirth  :'',
      pulse  :'',
      respirationRate  :'',
      bloodPressure  :'',
      temperature  :'',
      nadi  :'',
      mala  :'',
      mutra :'',
      jiva  :'',
      druk  :'',
      sparsha  :'',
      chestWall  :'',
      shapeOfChestWall  :'',
      auscultation  :'',
      nose  :'',
      throat  :'',
      percussion  :'',
      auscultationRS :'',
      mentalStatus : ' ',
      memoryLoss : ' ',
      orientationTime : ' ',
      orientationPlace : ' ',
      speech : ' ',
      generalBehaviour : ' ',
      gait : ' ',
      musclePower : ' ',
      muscleTone : ' ',
      coOrdination : ' ',
      fingerNoseTest : ' ',
      kneeHealTest : ' ',
      involuntaryMovements : ' ',
      cervicalSpine : ' ',
      spine : ' ',
      shoulder : ' ',
      elbow : ' ',
      wrist : ' ',
      hip : ' ',
      knee : ' ',
      ankle : ' ',
      tenderness : ' ',
      tendonSheeth : ' ',
      jointCrepitus : ' ',
      SLR : ' ',
      braggardsTest : ' ',
      otherExaminations : ' ',
      CBC : ' ',
      urineRoutine : ' ',
      liverFunctionTest : ' ',
      kidneyFunctionTest : ' ',
      sputumTest : ' ',
      RIPCR : ' ',
      XRay : ' ',
      USG : ' ',
      CT : ' ',
      MRI : ' ',
      bloodGlucoseLevel : ' ',
      HbA1C : ' ',
      vitaminB12 : ' ',
      date: '',
      medicineName:'',
      dosage: '',
      days: '',
      panchakarma: '',
      consultation: '',
      medicines: '',
      totalAmount: 0,
      nextvisit: '',
    });


    const calculateTotal = () => {

      const { consultation, medicines } = formData;
      const total = parseFloat(consultation) + parseFloat(medicines);
      return total.toFixed(2);
    };
  
 
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegistration(formData); // Send the form data to the parent component
    setFormData({ name: '', contactNo: '', email: '' }); // Clear the form after submission
  

      // Extract the name and contact from the form data
  const { name, contact } = formData;

  // Update the patientName and patientContact state variables
  setPatientName(name);
  setPatientContact(contact);

    const totalAmount = calculateTotal();
    const dataToSend = { ...formData, totalAmount };

    // Send the form data to the backend server
    fetch('http://localhost:3001/api/doctor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          // Reset form fields
          setFormData({

            caseNumber  :'',
            name  :'',
            age  :'',
            gender  :'',
            education  :'',
            occupation :'',
            maritalStatus  :'',
            prakrity  :'',
            address  :'',
            contactNo :'',
            presentComplains  :'',
            presentComplainsduration  :'',
            associatedComplains  :'',
            associatedComplainsduration  :'',
            historyOfMedicine  :'',
            duration  :'',
            historyOfPastIllness  :'',
            illnessduration  :'',
            healthMaintenance  :'',
            familyHistory  :'',
            breakfastTime  :'',
            breakfastQuantity  :'',
            breakfastHealthy  :'',
            exercise  :'',
            addictions :'',
            travel  :'',
            screenTime  :'',
            sleepTime  :'',
            fastfood  :'',
            otherHabits  :'',
            natureOfWork  :'',
            mood  :'',
            menstrualCycleDate  :'',
            menstrualRegularity  :'',
            menstrualDays  :'',
            menstrualColor  :'',
            menstrualPain  :'',
            gravida  :'',
            para  :'',
            abortion  :'',
            miscarriage  :'',
            stillBirth  :'',
            pulse  :'',
            respirationRate  :'',
            bloodPressure  :'',
            temperature  :'',
            nadi  :'',
            mala  :'',
            mutra :'',
            jiva  :'',
            druk  :'',
            sparsha  :'',
            chestWall  :'',
            shapeOfChestWall  :'',
            auscultation  :'',
            nose  :'',
            throat  :'',
            percussion  :'',
            auscultationRS :'',
            mentalStatus : ' ',
            memoryLoss : ' ',
            orientationTime : ' ',
            orientationPlace : ' ',
            speech : ' ',
            generalBehaviour : ' ',
            gait : ' ',
            musclePower : ' ',
            muscleTone : ' ',
            coOrdination : ' ',
            fingerNoseTest : ' ',
            kneeHealTest : ' ',
            involuntaryMovements : ' ',
            cervicalSpine : ' ',
            spine : ' ',
            shoulder : ' ',
            elbow : ' ',
            wrist : ' ',
            hip : ' ',
            knee : ' ',
            ankle : ' ',
            tenderness : ' ',
            tendonSheeth : ' ',
            jointCrepitus : ' ',
            SLR : ' ',
            braggardsTest : ' ',
            otherExaminations : ' ',
            CBC : ' ',
            urineRoutine : ' ',
            liverFunctionTest : ' ',
            kidneyFunctionTest : ' ',
            sputumTest : ' ',
            RIPCR : ' ',
            XRay : ' ',
            USG : ' ',
            CT : ' ',
            MRI : ' ',
            bloodGlucoseLevel : ' ',
            HbA1C : ' ',
            vitaminB12 : ' ',
            date: '',
            medicineName:'',
            dosage: '',
            days: '',
            panchakarma: '',
            consultation: '',
            medicines: '',
            totalAmount: '',
            nextvisit: '',
          });

          // Navigate to the Home page
          navigate('/home');
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });
  };



  const renderFormPage = () => {
    switch (currentPage) {
      
      case 1:
        return (
          <div className="form-section">
             <h2>Register here</h2>
             <br></br>
             <br></br>
            <h3>Personal Details</h3>
            <div className="form-grid">
              <label htmlFor="caseNumber">Case Number:</label>
              <input
                type="varchar"
                id="caseNumber"
                placeholder="Case Number"
                value={formData.caseNumber}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, caseNumber: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="name">Name:</label>
              <input
                type="varchar"
                id="name"
                placeholder="name"
                value={formData.name}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                min="0"
                max="150"
                id="age"
                placeholder="age"
                value={formData.age}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, age: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="gender">Gender:</label>
              <input
                type="varchar"
                id="gender"
                placeholder="gender"
                value={formData.gender}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, gender: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="education">Education:</label>
              <input
                type="varchar"
                id="education"
                placeholder="education"
                value={formData.education}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, education: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="occupation">Occupation:</label>
              <input
                type="varchar"
                id="occupation"
                placeholder="occupation"
                value={formData.occupation}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, occupation: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="maritalStatus">Marital Status:</label>
              <input
                type="varchar"
                id="maritalStatus"
                placeholder="Marital Status"
                value={formData.maritalStatus}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, maritalStatus: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="prakrity">Prakrity:</label>
              <input
                type="varchar"
                id="prakrity"
                placeholder="Prakrity"
                value={formData.prakrity}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, prakrity: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="address"
                value={formData.address}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, address: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="contactNo">Contact No:</label>
              <input
                type="varchar"
                id="contactNo"
                placeholder="contactNo"
                value={formData.contactNo}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, contactNo: e.target.value }))}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-section">
            <h3>Diagnosis</h3>
            <div className="form-grid">
              <label htmlFor="presentComplains">Present complaints (Symptoms):</label>
              
              <input
                type="text"
                id="presentComplains"
                placeholder="Present complaints (Symptoms)"
                value={formData.presentComplains}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, presentComplains: e.target.value }))}
              />
            </div>
            <div className="form-grid">
              <label htmlFor="presentComplainsduration">Present complaints (Duration):</label>
              <textarea
                id="presentComplainsduration"
                name="presentComplainsduration"
                placeholder="Present complaints (Duration)"
                value={formData.presentComplainsduration}
                onChange={handleTextAreaChange}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="associatedComplains">Associated complaints (Symptoms):</label>
              <textarea
                id="associatedComplains"
                placeholder="Associated complaints (Symptoms)"
                value={formData.associatedComplains}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, associatedComplains: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="associatedComplainsduration">Associate complaints (Duration):</label>
              <textarea
                id="associatedComplainsduration"
                placeholder="Associate complaints (Duration)"
                value={formData.associatedComplainsduration}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, associatedComplainsduration: e.target.value }))}
              ></textarea>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-section">
            <h3>History</h3>
            <div className="form-grid">
              <label htmlFor="historyOfMedicine">History of Medicine:</label>
              <textarea
                id="historyOfMedicine"
                placeholder="History of Medicine"
                value={formData.historyOfMedicine}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, historyOfMedicine: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="duration">History of Medicine Duration:</label>
              <textarea
                id="duration"
                placeholder="History of Medicine Duration"
                value={formData.duration}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, duration: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="historyOfPastIllness">History of Past Illness:</label>
              <textarea
                id="historyOfPastIllness"
                placeholder="History of Past Illness"
                value={formData.historyOfPastIllness}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, historyOfPastIllness: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="illnessduration">Illness Duration:</label>
              <textarea
                id="illnessduration"
                placeholder="Illness Duration"
                value={formData.illnessduration}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, illnessduration: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="healthMaintenance">Health Maintenance:</label>
              <textarea
                id="healthMaintenance"
                placeholder="Health Maintenance"
                value={formData.healthMaintenance}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, healthMaintenance: e.target.value }))}
              ></textarea>
            </div>
            <div className="form-grid">
              <label htmlFor="familyHistory">Family History:</label>
              <textarea
                id="familyHistory"
                placeholder="Family History"
                value={formData.familyHistory}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, familyHistory: e.target.value }))}
              ></textarea>
            </div>
          </div>
        );
        case 4:
          return (
            <div className="form-section">
              <h3>Personal Habits</h3>
              <div className="form-grid">
                <label htmlFor="breakfastTime">Breakfast Time:</label>
                <input
                  type="varchar"
                  id="breakfastTime"
                  placeholder="Breakfast Time"
                  value={formData.breakfastTime}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, breakfastTime: e.target.value }))}
                />
              </div>
              <div className="form-grid">
                <label htmlFor="breakfastQuantity">Breakfast Quantity:</label>
                <input
                  type="varchar"
                  id="breakfastQuantity"
                  placeholder="Breakfast Quantity"
                  value={formData.breakfastQuantity}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, breakfastQuantity: e.target.value }))}
                />
              </div>
              <div className="form-grid">
                <label htmlFor="breakfastHealthy">Breakfast Healthy/Unhealthy:</label>
                <input
                  type="varchar"
                  id="breakfastHealthy"
                  placeholder="Breakfast Healthy/Unhealthy"
                  value={formData.breakfastHealthy}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, breakfastHealthy: e.target.value }))}
                />
              </div>
              <div className="form-grid">
                <label htmlFor="exercise">Exercise:</label>
                <input
                  type="varchar"
                  id="exercise"
                  placeholder="Exercise"
                  value={formData.exercise}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, exercise: e.target.value }))}
                />
              </div>
              <div className="form-grid">
                <label htmlFor="addictions">Addictions:</label>
                <input
                  type="varchar"
                  id="addictions"
                  placeholder="Addictions"
                  value={formData.addictions}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, addictions: e.target.value }))}
                />
              </div>
              <div className="form-grid">
                <label htmlFor="travel">Traveling:</label>
                <select
                  id="travel"
                  value={formData.travel}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, travel: e.target.value }))}
                >
                  <option value="">Choose an option</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="Public Transport">Public Transport</option>
                </select>
              </div>
              <div className="form-grid">
                <label htmlFor="screenTime">Screen Time:</label>
                <textarea
                  id="screenTime"
                  placeholder="Screen Time"
                  value={formData.screenTime}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, screenTime: e.target.value }))}
                ></textarea>
              </div>
              <div className="form-grid">
                <label htmlFor="sleepTime">Sleep Time:</label>
                <textarea
                  id="sleepTime"
                  placeholder="Sleep Time"
                  value={formData.sleepTime}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, sleepTime: e.target.value }))}
                ></textarea>
              </div>
              <div className="form-grid">
                <label htmlFor="fastfood">Fast Food Intake:</label>
                <textarea
                  id="fastfood"
                  placeholder="Fast Food Intake"
                  value={formData.fastfood}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, fastfood: e.target.value }))}
                ></textarea>
              </div>
              <div className="form-grid">
                <label htmlFor="otherHabits">Other Habits:</label>
                <textarea
                  id="otherHabits"
                  placeholder="Other Habits"
                  value={formData.otherHabits}
                  onChange={(e) => setFormData((prevData) => ({ ...prevData, otherHabits: e.target.value }))}
                ></textarea>
              </div>
            </div>
          );
        
          case 5:
            return (
              <div className="form-section">
                <h3>Occupational Details</h3>
                <div className="form-grid">
                  <label htmlFor="natureOfWork">Nature of Work:</label>
                  <textarea
                    id="natureOfWork"
                    placeholder="Nature of Work"
                    value={formData.natureOfWork}
                    onChange={(e) => setFormData((prevData) => ({ ...prevData, natureOfWork: e.target.value }))}
                  ></textarea>
                </div>
                  <h3>Psychological Status</h3>
                  <div className="form-grid">
                    <label htmlFor="mood">Mood:</label>
                    <textarea
                      id="mood"
                      placeholder="Stressed/Depressed/Anxiety/Other"
                      value={formData.mood}
                      onChange={(e) => setFormData((prevData) => ({ ...prevData, mood: e.target.value }))}
                    ></textarea>
                  </div>
                </div>
              );
              case 6:
                return (
                  <div className="form-section">
                    <h3>Gynaecological History</h3>
                    <div className="form-grid">
                      <label htmlFor="menstrualCycleDate">Menstrual Cycle Date:</label>
                      <textarea
                        id="menstrualCycleDate"
                        placeholder="Menstrual Cycle Date"
                        value={formData.menstrualCycleDate}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, menstrualCycleDate: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="menstrualRegularity">Menstrual Regularity:</label>
                      <textarea
                        id="menstrualRegularity"
                        placeholder="Regular/Irregular"
                        value={formData.menstrualRegularity}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, menstrualRegularity: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="menstrualDays">Number of Menstrual Days:</label>
                      <textarea
                        id="menstrualDays"
                        placeholder="Number of Menstrual Days"
                        value={formData.menstrualDays}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, menstrualDays: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="menstrualColor">Color of Menstrual Flow:</label>
                      <textarea
                        id="menstrualColor"
                        placeholder="Red/Dark Red/Blackish Clots"
                        value={formData.menstrualColor}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, menstrualColor: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="menstrualPain">Menstrual Pain:</label>
                      <textarea
                        id="menstrualPain"
                        placeholder="Severe/Normal"
                        value={formData.menstrualPain}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, menstrualPain: e.target.value }))}
                      ></textarea>
                    </div>
                    <h3>Obstetrical History</h3>
                    <div className="form-grid">
                      <label htmlFor="gravida">Gravida:</label>
                      <textarea
                        id="gravida"
                        placeholder="Gravida"
                        value={formData.gravida}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, gravida: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="para">Para:</label>
                      <textarea
                        id="para"
                        placeholder="Para"
                        value={formData.para}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, para: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="abortion">Abortion:</label>
                      <textarea
                        id="abortion"
                        placeholder="Abortion"
                        value={formData.abortion}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, abortion: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="miscarriage">Miscarriage:</label>
                      <textarea
                        id="miscarriage"
                        placeholder="Miscarriage"
                        value={formData.miscarriage}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, miscarriage: e.target.value }))}
                      ></textarea>
                    </div>
                    <div className="form-grid">
                      <label htmlFor="stillBirth">Still Birth:</label>
                      <textarea
                        id="stillBirth"
                        placeholder="Still Birth"
                        value={formData.stillBirth}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, stillBirth: e.target.value }))}
                      ></textarea>
                    </div>
                  </div>
                );
                case 7:
                  return (
                    <div className="form-section">
                      <h3>Physical Examination</h3>
                      <div className="form-grid">
                        <label htmlFor="pulse">Pulse:</label>
                        <textarea
                          id="pulse"
                          placeholder="Pulse"
                          value={formData.pulse}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, pulse: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="respirationRate">Respiration Rate:</label>
                        <textarea
                          id="respirationRate"
                          placeholder="Respiration Rate"
                          value={formData.respirationRate}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, respirationRate: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="bloodPressure">Blood Pressure:</label>
                        <textarea
                          id="bloodPressure"
                          placeholder="Blood Pressure"
                          value={formData.bloodPressure}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, bloodPressure: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="temperature">Temperature:</label>
                        <textarea
                          id="temperature"
                          placeholder="Temperature"
                          value={formData.temperature}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, temperature: e.target.value }))}
                        ></textarea>
                      </div>
                      <h3>Ashta sthana pariksha</h3>
                      <div className="form-grid">
                        <label htmlFor="nadi">Nadi:</label>
                        <textarea
                          id="nadi"
                          placeholder="Drut/Mand/Normal/Vatapradhan/Pitta/Kapna"
                          value={formData.nadi}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, nadi: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="mala">Mala:</label>
                        <textarea
                          id="mala"
                          placeholder="Buddha/Painful/Atigara/Grahani/any other"
                          value={formData.mala}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, mala: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="mutra">Mutra:</label>
                        <textarea
                          id="mutra"
                          placeholder="Color, odor, frequency, other"
                          value={formData.mutra}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, mutra: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="jiva">Jiva:</label>
                        <textarea
                          id="jiva"
                          placeholder="sam/niram/ishat sam"
                          value={formData.jiva}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, jiva: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="druk">Druk:</label>
                        <textarea
                          id="druk"
                          placeholder="Color of conjunctiva: pink/red/yellow"
                          value={formData.druk}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, druk: e.target.value }))}
                        ></textarea>
                      </div>
                      <div className="form-grid">
                        <label htmlFor="sparsha">Sparsha:</label>
                        <textarea
                          id="sparsha"
                          placeholder="Sparsha"
                          value={formData.sparsha}
                          onChange={(e) => setFormData((prevData) => ({ ...prevData, sparsha: e.target.value }))}
                        ></textarea>
                      </div>
                    </div>
                  );
// Case 8: CVS - Cardiovascular System
    case 8:
      return (
        <div className="form-section">
          <h3>CVS - Cardiovascular System</h3>
          <div className="form-grid">
            <label htmlFor="chestWall">Chest Wall:</label>
            <textarea
              id="chestWall"
              placeholder="Chest Wall"
              value={formData.chestWall}
              onChange={(e) => setFormData((prevData) => ({ ...prevData, chestWall: e.target.value }))}
            ></textarea>
          </div>
          <div className="form-grid">
            <label htmlFor="shapeOfChestWall">Shape of Chest Wall:</label>
            <textarea
              id="shapeOfChestWall"
              placeholder="Shape of Chest Wall"
              value={formData.shapeOfChestWall}
              onChange={(e) => setFormData((prevData) => ({ ...prevData, shapeOfChestWall: e.target.value }))}
            ></textarea>
          </div>
          <div className="form-grid">
            <label htmlFor="auscultation">Auscultation:</label>
            <textarea
              id="auscultation"
              placeholder="Auscultation"
              value={formData.auscultation}
              onChange={(e) => setFormData((prevData) => ({ ...prevData, auscultation: e.target.value }))}
            ></textarea>
          </div>
      <h3>R.S - Respiratory System</h3>
      <div className="form-grid">
        <label htmlFor="nose">Nose:</label>
        <textarea
          id="nose"
          placeholder="DNS/Turbinates/inflammation"
          value={formData.nose}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, nose: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="throat">Throat:</label>
        <textarea
          id="throat"
          placeholder="Inflammation/tonsils"
          value={formData.throat}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, throat: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="percussion">Percussion:</label>
        <textarea
          id="percussion"
          placeholder="Percussion"
          value={formData.percussion}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, percussion: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="auscultation">Auscultation:</label>
        <textarea
          id="auscultation"
          placeholder="Crepitations/Ronchi/Wheezes"
          value={formData.auscultation}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, auscultation: e.target.value }))}
        ></textarea>
      </div>
    </div>
  ); 
// Case 9: CNS - Central Nervous System
case 9:
  return (
    <div className="form-section">
      <h3>CNS - Central Nervous System</h3>
      <div className="form-grid">
        <label htmlFor="mentalStatus">Mental Status:</label>
        <textarea
          id="mentalStatus"
          placeholder="Conscious/Drowsy/Stupor/Semi coma/coma"
          value={formData.mentalStatus}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, mentalStatus: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="memoryLoss">Memory Loss:</label>
        <select
          id="memoryLoss"
          value={formData.memoryLoss}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, memoryLoss: e.target.value }))}
        >
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="form-grid">
        <label htmlFor="orientationTime">Orientation - Time:</label>
        <input
          type="text"
          id="orientationTime"
          placeholder="Time"
          value={formData.orientationTime}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, orientationTime: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="orientationPlace">Orientation - Place:</label>
        <input
          type="text"
          id="orientationPlace"
          placeholder="Place"
          value={formData.orientationPlace}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, orientationPlace: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="speech">Speech:</label>
        <textarea
          id="speech"
          placeholder="Speech"
          value={formData.speech}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, speech: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="generalBehaviour">General Behaviour:</label>
        <textarea
          id="generalBehaviour"
          placeholder="General Behaviour"
          value={formData.generalBehaviour}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, generalBehaviour: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="gait">Gait:</label>
        <textarea
          id="gait"
          placeholder="Gait"
          value={formData.gait}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, gait: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="motorSystem">Motor System:</label>
        <div>
          <label> Muscle Power:</label>
          <input
            type="number"
            min="0"
            max="5"
            id="musclePower"
            placeholder="0-5"
            value={formData.musclePower}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, musclePower: e.target.value }))}
          />
        </div>
        <div>
          <label>Muscle Tone:</label>
          <select
          type="enum"
            id="muscleTone"
            value={formData.muscleTone}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, muscleTone: e.target.value }))}
          >
            <option value="">Choose an option</option>
            <option value="Hypotonia">Hypotonia</option>
            <option value="Hyper">Hyper</option>
            <option value="Rigidity">Rigidity</option>
          </select>
        </div>
        <div>
          <label>Co-ordination:</label>
          <input
            type="text"
            id="coOrdination"
            placeholder="Co-ordination"
            value={formData.coOrdination}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, coOrdination: e.target.value }))}
          />
        </div>
        <div>
          <label>Upper Limb (Finger Nose Test):</label>
          <textarea
            id="fingerNoseTest"
            placeholder="Upper Limb (Finger Nose Test)"
            value={formData.fingerNoseTest}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, fingerNoseTest: e.target.value }))}
          ></textarea>
        </div>
        <div>
          <label>Lower Limb (Knee Heal Test):</label>
          <textarea
            id="kneeHealTest"
            placeholder="Lower Limb (Knee Heal Test)"
            value={formData.kneeHealTest}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, kneeHealTest: e.target.value }))}
          ></textarea>
        </div>
        <div>
          <label>Involuntary Movements:</label>
          <textarea
            id="involuntaryMovements"
            placeholder="Involuntary Movements"
            value={formData.involuntaryMovements}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, involuntaryMovements: e.target.value }))}
          ></textarea>
        </div>
      </div>
    </div>
  );
 // Case 10: Joint Examinations
case 10:
  return (
    <div className="form-section">
      <h3>Joint Examinations</h3>
      <div className="form-grid">
        <label htmlFor="cervicalSpine">Cervical Spine:</label>
        <textarea
          id="cervicalSpine"
          placeholder="Cervical Spine"
          value={formData.cervicalSpine}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, cervicalSpine: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="spine">Spine:</label>
        <textarea
          id="spine"
          placeholder="Spine"
          value={formData.spine}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, spine: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="shoulder">Shoulder:</label>
        <textarea
          id="shoulder"
          placeholder="Shoulder"
          value={formData.shoulder}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, shoulder: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="elbow">Elbow:</label>
        <textarea
          id="elbow"
          placeholder="Elbow"
          value={formData.elbow}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, elbow: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="wrist">Wrist:</label>
        <textarea
          id="wrist"
          placeholder="Wrist"
          value={formData.wrist}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, wrist: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="hip">Hip:</label>
        <textarea
          id="hip"
          placeholder="Hip"
          value={formData.hip}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, hip: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="knee">Knee:</label>
        <textarea
          id="knee"
          placeholder="Knee"
          value={formData.knee}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, knee: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="ankle">Ankle:</label>
        <textarea
          id="ankle"
          placeholder="Ankle"
          value={formData.ankle}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, ankle: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="tenderness">Tenderness:</label>
        <textarea
          id="tenderness"
          placeholder="Tenderness"
          value={formData.tenderness}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, tenderness: e.target.value }))}
        ></textarea>
      </div>
    </div>
  );
  
// Case 11: Crepitus
case 11:
  return (
    <div className="form-section">
      <h3>Crepitus</h3>
      <div className="form-grid">
        <label htmlFor="tendonSheeth">Tendon Sheeth:</label>
        <textarea
          id="tendonSheeth"
          placeholder="Tendon Sheeth"
          value={formData.tendonSheeth}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, tendonSheeth: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="jointCrepitus">Joint Crepitus:</label>
        <textarea
          id="jointCrepitus"
          placeholder="Joint Crepitus"
          value={formData.jointCrepitus}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, jointCrepitus: e.target.value }))}
        ></textarea>
      </div>
      <h3>Examinations</h3>
      <div className="form-grid">
        <label htmlFor="SLR">SLR (Straight Leg Raise) Test:</label>
        <textarea
          id="SLR"
          placeholder="SLR (Straight Leg Raise) Test"
          value={formData.SLR}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, SLR: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="braggardsTest">Braggard's Test:</label>
        <textarea
          id="braggardsTest"
          placeholder="Braggard's Test"
          value={formData.braggardsTest}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, braggardsTest: e.target.value }))}
        ></textarea>
      </div>
      <div className="form-grid">
        <label htmlFor="otherExaminations">Other Examinations:</label>
        <textarea
          id="otherExaminations"
          placeholder="Other Examinations"
          value={formData.otherExaminations}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, otherExaminations: e.target.value }))}
        ></textarea>
      </div>
    </div>
  );
 // Case 12: Investigations advised
case 12:
  return (
    <div className="form-section">
      <h3>Investigations Advised</h3>
      <div className="form-grid">
        <label htmlFor="CBC">CBC:</label>
        <input
          type="text"
          id="CBC"
          placeholder="CBC"
          value={formData.CBC}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, CBC: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="urineRoutine">Urine Routine:</label>
        <input
          type="text"
          id="urineRoutine"
          placeholder="Urine Routine"
          value={formData.urineRoutine}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, urineRoutine: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="liverFunctionTest">Liver Function Test:</label>
        <input
          type="text"
          id="liverFunctionTest"
          placeholder="Liver Function Test"
          value={formData.liverFunctionTest}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, liverFunctionTest: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="kidneyFunctionTest">Kidney Function Test:</label>
        <input
          type="text"
          id="kidneyFunctionTest"
          placeholder="Kidney Function Test"
          value={formData.kidneyFunctionTest}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, kidneyFunctionTest: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="sputumTest">Sputum Test:</label>
        <input
          type="text"
          id="sputumTest"
          placeholder="Sputum Test"
          value={formData.sputumTest}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, sputumTest: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="RIPCR">RIPCR:</label>
        <input
          type="text"
          id="RIPCR"
          placeholder="RIPCR"
          value={formData.RIPCR}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, RIPCR: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="XRay">X-ray:</label>
        <input
          type="text"
          id="XRay"
          placeholder="X-ray"
          value={formData.XRay}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, XRay: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="USG">USG (Abdomen/Cervix):</label>
        <input
          type="text"
          id="USG"
          placeholder="USG (Abdomen/Cervix)"
          value={formData.USG}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, USG: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="CT">CT Scan:</label>
        <input
          type="text"
          id="CT"
          placeholder="CT Scan"
          value={formData.CT}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, CT: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="MRI">MRI:</label>
        <input
          type="text"
          id="MRI"
          placeholder="MRI"
          value={formData.MRI}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, MRI: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="bloodGlucoseLevel">Blood Glucose Level:</label>
        <input
          type="text"
          id="bloodGlucoseLevel"
          placeholder="Blood Glucose Level"
          value={formData.bloodGlucoseLevel}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, bloodGlucoseLevel: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="HbA1C">HbA1C:</label>
        <input
          type="text"
          id="HbA1C"
          placeholder="HbA1C"
          value={formData.HbA1C}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, HbA1C: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="vitaminB12">Vitamin B12:</label>
        <input
          type="text"
          id="vitaminB12"
          placeholder="Vitamin B12"
          value={formData.vitaminB12}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, vitaminB12: e.target.value }))}
        />
      </div>
    </div>
  );

  case 13:
    return (
      <div className="form-section">
      <h3>Treatment Plan</h3>
      
      <div className="form-grid">
        <label htmlFor="dosage">Visit Date:</label>
        <input
          type="date"
          id="date"
          placeholder=" Visit Date"
          value={formData.date}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, date: e.target.value }))}
        />
      </div>
      <br></br>
      <div className="form-grid">
  <label htmlFor="medicineName">Medicine Name:</label>
  <textarea
    id="medicineName"
    placeholder="Medicine Name"
    value={formData.medicineName}
    onChange={(e) => setFormData((prevData) => ({ ...prevData, medicineName: e.target.value }))}
  />
</div>
<div className="form-grid">
  <label htmlFor="dosage">Dosage:</label>
  <textarea
    id="dosage"
    placeholder="Dosage"
    value={formData.dosage}
    onChange={(e) => setFormData((prevData) => ({ ...prevData, dosage: e.target.value }))}
  />
</div>
<div className="form-grid">
  <label htmlFor="days">Days:</label>
  <textarea
    id="days"
    placeholder="Days"
    value={formData.days}
    onChange={(e) => setFormData((prevData) => ({ ...prevData, days: e.target.value }))}
  />
</div>


    </div>
  );

// Case 14: Treatment
case 14:
  return (
    <div className="form-section">
      <h3>Treatment Fees & Consultation</h3>
      <div className="form-grid">
        <label htmlFor="panchakarma">Panchakarma:</label>
        <select
          id="panchakarma"
          value={formData.panchakarma}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, panchakarma: e.target.value }))}
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
      </div>
      <div className="form-grid">
        <label htmlFor="consultation">Consultation:</label>
        <input
          type="text"
          id="consultation"
          placeholder="Consultation"
          value={formData.consultation}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, consultation: e.target.value }))}
        />
      </div>
      <div className="form-grid">
        <label htmlFor="medicines">Medicines:</label>
        <input
          type="text"
          id="medicines"
          placeholder="Medicines"
          value={formData.medicines}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, medicines: e.target.value }))}
        />
      </div>
     
      <div className="form-grid">
      <label htmlFor="totalAmount">Total Amunt:</label>
    <input
      type="float"
      id="totalAmount"
      value={calculateTotal()} // Use toFixed(2) to display the total with two decimal places
      readOnly
    />
  </div>
      <div className="form-grid">
        <label htmlFor="nextvisit">Next Visit:</label>
        <input
          type="varchar"
          id="nextvisit"
          placeholder="Next visit"
          value={formData.nextvisit}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, nextvisit: e.target.value }))}
        />
      </div>
    </div>
  );


  default:
    return null;
}
};

return (
<div>
  
  <div className="registration-form">
    <form onSubmit={handleSubmit}>
      {renderFormPage()}
      <div className="button-group">
        {currentPage > 1 && (
          <button type="button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        {currentPage < 14 && <button type="button" onClick={handleNextPage}>Next</button>}
        {currentPage === 14 && <button type="submit">Submit</button>}
      </div>
    </form>
  </div>
</div>
);
};

export default RegistrationForm;