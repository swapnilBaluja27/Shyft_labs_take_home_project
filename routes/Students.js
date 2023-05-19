const express = require('express');
const router = express.Router();
const {getStudents,addStudent,deleteStudent} = require('../controllers/Students')


// Route to Get all the student in the system
router.get('/getstudents', getStudents);

// Route to Post a new student in the system
router.post('/addstudent', addStudent);

// Route to Delete a student in the system
router.delete('/deletestudent', deleteStudent);

module.exports = router;