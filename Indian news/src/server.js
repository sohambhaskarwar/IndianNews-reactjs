const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submission
app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Write form data to a file
  fs.appendFile("form_responses.txt", JSON.stringify(formData) + "\n", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      res.status(500).send("Error submitting form");
      return;
    }
  
    console.log("Form data written to file");
    res.status(200).send("Form submitted successfully");
  });
  
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
