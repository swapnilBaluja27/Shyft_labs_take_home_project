var app = require("./app.js")
require('dotenv').config()
const port = process.env.PORT || 8000

// Starting the server
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
