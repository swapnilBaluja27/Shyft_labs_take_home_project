const express = require('express');
const router = express.Router();
const{addResult,getResults} = require("../controllers/Results.js")

// Route to Get all the results in the system
router.get('/getresults', getResults);

// Route to Post a new result in the system
router.post('/addresult', addResult);



module.exports = router;