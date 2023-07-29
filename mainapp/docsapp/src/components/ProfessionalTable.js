import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfessionalTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/doctor'); // Replace '/api/doctor' with your API endpoint
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data from the API:', error);
    }
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Name</th>
        <th>Contact No</th>
      </tr>
    );
  };

  const renderTableData = () => {
    return data.map((doctor) => (
      <tr key={doctor.id}>
        <td>{doctor.name}</td>
        <td>{doctor.contact_no}</td>
        {/* No need to render other columns as we only display name and contact_no */}
      </tr>
    ));
  };

  return (
    <div>
      <h1>Dynamic Table with Data from API</h1>
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default ProfessionalTable;
