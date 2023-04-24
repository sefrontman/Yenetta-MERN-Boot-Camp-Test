// Import required modules
const express = require('express');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data in request body
app.use(express.json());

// Define your routes here

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Boot Camp Test project!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
