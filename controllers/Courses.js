const course_model = require("../models/Courses.js")

async function getCourses (req,res){
    try{
        const course_var = await course_model.getCourses(); 

        if (!course_var) {
            res.status(401).json({
                Error:"Not found"
            })
        } else {
            res.status(200).json({ 
                message: 'All courses', course_var 
            });
        }
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}

async function addCourse (req,res){
    
        const {course_name}= req.body;
        const course_var = await course_model.addCourse(course_name);
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