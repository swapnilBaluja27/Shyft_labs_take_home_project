const db = require('../database.js');

const Result = {};

Result.getResult= async function() {
    const sql = 'SELECT * FROM results';
    const [rows] = await db.execute(sql);
    return rows;
};

Result.addResult = async function(input) {
    const querry = 'INSERT INTO results (course_name, student_name, score) VALUES (?, ?, ?)';
    const inputvalue = [input.course_name, input.student_name, input.score];
    const [value] = await db.execute(querry, inputvalue);
    return value;
};

module.exports=Result;