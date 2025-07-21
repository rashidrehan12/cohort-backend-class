const express = require('express'); // Import the Express framework
const connectDB = require('./src/db/db'); // Import the connectDB function from db.js
const noteModel = require('./src/models/note.model'); // Import the Note model from note.model.js




const app = express(); // Create an instance of Express
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/notes',async (req, res) => { // Define a route for GET requests to the root URL
  const notes = await noteModel.find(); // Find all notes in the database
  
  res.json({
    message: "Notes fetched successfully",
    notes // Send the fetched notes as a JSON response
  });
});

app.post('/notes',async (req, res) => {
    const { title, content } = req.body;

    console.log(title, content);

    await noteModel.create({
        title,content
    })

     res.json({
        message: "Note created successfully"
     });
});

app.delete('/notes/:id', async (req, res) => {

  const noteId = req.params.id; // Get the note ID from the request parameters
  await noteModel.findOneAndDelete({ 
    _id: noteId 
  }); // Find the note by ID and delete it


  

  res.json({
    message: "Note deleted successfully"
  });
})

app.patch('/notes/:id', async (req, res) => {
  const noteId = req.params.id; // Get the note ID from the request parameters
  const {title} = req.body; // Get the updated title from the request body

  await noteModel.findOneAndUpdate({
    _id: noteId
  },
    {
      title: title // Update the note's title
    });

  res.json({
    message: "Note updated successfully"
  });
});
  


connectDB(); // Call the connectDB function to establish a connection to the database
// Start the server and listen on port 3000

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});