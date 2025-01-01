const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
app.use(cors());
const app = express();
const PORT = 3200;

// Middleware to parse JSON data
app.use(express.json());

// Handle form submission
app.post('/submit', (req, res) => {
  console.log(req.body)
  const { name, message } = req.body;

  // Create the content for the file
  const content = `Name: ${name}\n\nMessage:\n${message}`;

  // Write the content to a .txt file
  const fileName = `message_${Date.now()}.txt`;
  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).send('Server Error: Unable to save the file.');
    }

    console.log(`File saved: ${filePath}`);
    res.status(200).send('Message saved successfully.');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
