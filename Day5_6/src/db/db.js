const moongoose = require('mongoose'); // Import the mongoose library to interact with MongoDB
// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js


// server Database se kaise connect hoga ye tum db.js file me likhoge

function connectDB() { // Define a function to connect to the database
    moongoose.connect("mongodb+srv://rashidrehan:kxOq7JPbgJmUdgFp@cluster0.8zvgf4b.mongodb.net/cohort") // Use mongoose to connect to the MongoDB database
    .then(() => { // If the connection is successful, execute this block
        console.log("Database connected successfully"); // Log a success message to the console
    })
}

module.exports = connectDB; // Export the connectDB function so it can be used in other files
// server.js file me import karna padega db.js file ko