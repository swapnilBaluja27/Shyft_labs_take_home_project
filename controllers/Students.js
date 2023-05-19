const student = require("../models/Students.js")



async function getStudents(req, res) {
    try{
        const student_var = await student.getStudents(); 

        if (!student_var) {
            res.status(401).json({
                Error:"Error Not found"
            })
        } else {
            res.status(200).json({ 
                message: 'All Students', student_var 
            });
        }
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}



async function  addStudent (req, res) {
    const {first_name, family_name, date_of_birth,email} = req.body 
    const values = {first_name, family_name, date_of_birth,email}
    const student_var = await student.addStudent(values);
   
    try{   
        if (!student_var) {
            return res.status(401).json({
                Error:"Error Inserting Student"
            })
        } else {
            return res.status(200).json({ message: 'New Student created'});
        }
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}


async function deleteStudent (req,res){
    const {first_name}= req.body;
    const student_var = await student.deleteStudent(first_name);
try{
    if (!student_var) {
    return res.status(401).json({
        Error:"Error Deleteting Student"
    })
} else {
    return res.status(200).json({ message: 'Student Deleted'});
}

}
catch(err){
    console.log(`Error: ${err}`)
}
}
module.exports = {getStudents,addStudent,deleteStudent}