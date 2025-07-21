const mongoose = require('mongoose'); // Import the mongoose library to interact with MongoDB


/*  title & content */
const noteSchema = new mongoose.Schema({ // Define a schema for the Note model
    title:String, // Define a field for the title of the note
    content:String // Define a field for the content of the note
}) 

const noteModel = mongoose.model('note', noteSchema); // Create a model named 'Note' using the defined schema

module.exports = noteModel; // Export the Note model so it can be used in other files
// This allows you to perform CRUD operations on the 'notes' collection in the MongoDB database