const course_model = require("../models/Courses.js")

async function getCourses (req,res){
    try{
        const courseVar = await course_model.getCourses(); 

        if (!courseVar) {
            res.status(401).json({
                Error:"Not found"
            })
        } else {
            var all_course = []
            for(let course of courseVar){
                all_course.push(course.course_name) 
            }
            res.status(200).json({ 
                message: 'All courses', all_course 
            });
        }
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}

async function addCourse (req,res){
        
        const {courseName}= req.body;
        const course_var = await course_model.addCourse(courseName);
    try{
        if (!course_var) {
        return res.status(401).json({
            Error:"Error Inserting course"
        })
    } else {
        return res.status(200).json({ 
            message: 'New course created'
        });
    }

    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}

async function deleteCourse (req,res){
    
    const {course_name}= req.body;
    const course_var = await course_model.deleteCourse(course_name);
try{
    if (!course_var) {
    return res.status(401).json({
        Error:"Error Deleteting Course"
    })
} else {
    return res.status(200).json({ 
        message: 'Course Deleted'
    });
}

}
catch(err){
    console.log(`Error: ${err}`)
}
}
module.exports = {getCourses,addCourse,deleteCourse}