//import 
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const cors = require("cors")

const routes= require('./routes/todoroute')

//create express app
const app = express()

app.use(express.json())
app.use(cors())


//establish mongoose connection
mongoose.connect(process.env.MONGODB_URL)



//mongoose connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

app.use(routes)




//start the server 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening onn port ${PORT}`))