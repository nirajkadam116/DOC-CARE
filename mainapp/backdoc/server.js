const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jidnyasa@6',
  database: 'mainapp', // Database name: mainapp
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Enable CORS for all routes
app.use(express.json());
app.use(cors());


// Middleware to parse the addMedicines field into a JSON array
app.use((req, res, next) => {
  console.log('addMedicines:', req.body.addMedicines); // Add this line to log the value
  // Check if the request body contains the addMedicines field
  if (req.body.addMedicines) {
    // If addMedicines is already an array (from the frontend), skip parsing
    if (Array.isArray(req.body.addMedicines)) {
      return next();
    }
    // No need to parse it again, as it has already been parsed in the frontend
  }
  next();
});



// Create a POST route to handle form submission for doctor data
app.post('/api/doctor', (req, res) => {
  const formData = req.body;
    // Parse the date field into 'YYYY-MM-DD' format
  if (formData.date) {
    formData.date = new Date(formData.date).toISOString().split('T')[0];
  }

  // Serialize the addMedicines array to JSON
  formData.addMedicines = JSON.stringify(formData.addMedicines);
  // Insert the doctor data into the database
  connection.query('INSERT INTO doctor SET ?', formData, (err, result) => {
    if (err) {
      console.error('Error inserting doctor data into the database: ', err);
      res.sendStatus(500);
      return;
    }

    console.log('doctor data inserted successfully!');
    res.sendStatus(200);
  });
});

// POST route to handle form submission for doctor data
app.post('/api/doctor', (req, res) => {
  const formData = req.body;

  // Serialize the addMedicines array to JSON
  formData.addMedicines = JSON.stringify(formData.addMedicines);

  // Insert the doctor data into the database
  connection.query('INSERT INTO doctor SET ?', formData, (err, result) => {
    if (err) {
      console.error('Error inserting doctor data into the database:', err);
      res.sendStatus(500);
      return;
    }

    console.log('doctor data inserted successfully!');
    res.sendStatus(200);
  });
});


// GET route to fetch doctor data by name
app.get('/api/doctor', (req, res) => {
  const searchName = req.query.name;

  // Construct the SQL query
  const sql = `SELECT * FROM doctor WHERE name = '${searchName}'`;

  // Execute the query
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Error retrieving doctor data' });
    } else {
      res.json(results);
      // Ensure that the addMedicines field is being sent in the response
      results.forEach((doctor) => {
        doctor.addMedicines = JSON.parse(doctor.addMedicines);
      });
    }
  });
});



// GET route to fetch doctor data by name or all doctors
app.get('/api/doctor', (req, res) => {
  const searchName = req.query.name;
  let sql = 'SELECT * FROM doctor';

  if (searchName) {
    sql = `SELECT * FROM doctor WHERE name = '${searchName}' OR id = '${searchName}'`;
  }

  
  // Execute the query with the "id" as the parameter
  connection.query(sql, [id], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Error retrieving doctor data' });
    } else {
      // Ensure that the addMedicines field is being sent in the response
      results.forEach((doctor) => {
        doctor.addMedicines = JSON.parse(doctor.addMedicines);
      });
      res.json(results);
    }
  });
});





// Define a DELETE route to delete doctor data by ID
app.delete('/api/doctor/:id', (req, res) => {
  const { id } = req.params;

  // Delete the doctor data from the database
  const query = 'DELETE FROM doctor WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting doctor data:', err);
      res.status(500).send('Error deleting doctor data');
      return;
    }

    console.log('doctor data deleted successfully');
    res.sendStatus(200);
  });
});

// PUT route to update doctor data
app.put('/api/doctor/:id', (req, res) => {
  const doctorId = req.params.id;
  const updatedData = req.body;

  // Parse the date field into 'YYYY-MM-DD' format
  if (updatedData.date) {
    updatedData.date = new Date(updatedData.date).toISOString().split('T')[0];
  }

  // Remove the 'showDetails' field from updatedData (if it exists)
  delete updatedData.showDetails;

  // Construct the SQL query
  const sql = `UPDATE doctor SET ? WHERE id = ?`;

  // Execute the query
  connection.query(sql, [updatedData, doctorId], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Error updating doctor data' });
    } else {
      res.json({ message: 'doctor data updated successfully' });
    }
  });
});

// PUT route to update doctor data by ID
app.put('/api/doctor/:id', (req, res) => {
  const doctorId = req.params.id;
  const updatedData = req.body;

  // Update the doctor data in the database
  connection.query('UPDATE doctor SET ? WHERE id = ?', [updatedData, doctorId], (error, results) => {
    if (error) {
      console.error('Error updating doctor data:', error);
      res.status(500).json({ error: 'Error updating doctor data' });
    } else {
      res.json({ message: 'doctor data updated successfully' });
    }
  });
});


// Define a default route
app.get('/', (req, res) => {
  res.send('Hey, root path!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
