const express = require('express');
const router = express.Router();
const {addCourse,getCourses,deleteCourse} = require("../controllers/Courses")


// Route to Get all the courses in the system
router.get('/getcourses', getCourses);

// Route to Post a new course in the system
router.post('/addcourse', addCourse);

// Route to Delete a course in the system
router.delete('/deletecourse', deleteCourse);

module.exports = router;