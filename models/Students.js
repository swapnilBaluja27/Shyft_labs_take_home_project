const db = require('../database.js');
const Student = {};

Student.addStudent = async function(student) {
    const querry = 'INSERT INTO students (first_name, family_name,date_of_birth,email) VALUES (?, ?, ?,?)';
    const inputvalue = [student.first_name,  student.family_name, student.date_of_birth,student.email];
    const [values] = await db.execute(querry, inputvalue);
    return values;
};
Student.getStudents  = async function() {
    const sql = 'SELECT first_name, family_name, date_of_birth,email FROM students';
    const [rows] = await db.execute(sql);
    return rows;
};
Student.deleteStudent = async function(student){
    const querry = 'DELETE FROM students WHERE first_name = (?)';
    const querry2 = 'DELETE FROM results WHERE student_name = (?)';
    
    const inputvalue = [student];
    const [value1] = await db.execute(querry, inputvalue);
    const [value2] = await db.execute(querry2, inputvalue);
    var success=false;
    success=value1 && value2;
    return success;

}
module.exports=Student;