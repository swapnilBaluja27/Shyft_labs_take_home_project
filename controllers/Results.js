const result_model = require("../models/Results.js")

async function getResults (req,res){
    try{
        const result_var = await result_model.getResult(); 

        if (!result_var) {
            res.status(401).json({
                Error:"Not found"
            })
        } else {
            res.status(200).json({ 
                message: 'All results', result_var 
            });
        }
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}
async function addResult(req, res) {
    const {course_name, student_name, score} = req.body 
    const values = {course_name, student_name, score}
    const result_var = await result_model.addResult(values); 
    try{   
        if (!result_var) {
            res.status(401).json({
                Error:"Error Inserting Result "
            })
        } else {
            res.status(200).json({ 
                message: 'Result Updated'
            });
        }
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}

module.exports = {getResults,addResult}