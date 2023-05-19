const express = require('express');
const cors = require("cors")
const path = require("path")
const studentRoutes = require("./routes/Students.js")
const courseRoutes = require("./routes/Results.js")
const resultRoutes = require("./routes/Courses.js")
// Express Server
const app = express() 

// Middleware
app.use(cors()) 
app.use(express.json()) 

//Custom Backend API's

app.use("/api",studentRoutes)
app.use("/api",courseRoutes)
app.use("/api",resultRoutes)


module.exports = app