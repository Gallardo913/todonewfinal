//import 
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

//create express app
const app = express()

//establish mongoose connection
mongoose.connect(process.env.MONGODB_URL)

//mongoose connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

//register my middleware

//routes and routers
app.get("/", (req, res)=> {
    res.send("<h1>Server is working</h1>")
})


//start the server 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening onn port ${PORT}`))