const db = require('../database.js');
const Course = {};

Course.getCourses  = async function() {
    const sql = 'SELECT course_name FROM courses';
    const [rows] = await db.execute(sql);
    return rows;
};
Course.addCourse = async function(course){
    const querry = 'INSERT INTO courses (course_name) VALUES (?)';
    const inputvalue = [course];
    const [values] = await db.execute(querry, inputvalue);
    return values;

}
Course.deleteCourse = async function(course){
    const querry = 'DELETE FROM courses WHERE course_name = (?)';
    const querry2 = 'DELETE FROM results WHERE course_name = (?)';
    const inputvalue = [course];
    const [value1] = await db.execute(querry, inputvalue);
    const [value2] = await db.execute(querry2, inputvalue);
    var success=false;
    success=value1 && value2;
    return success;

}
module.exports=Course