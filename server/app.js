"use strict"

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const router = require('./routers')
const bodyParser=require('body-parser')

//הרשאות גישה
const cors = require("cors")
app.use(cors())

//הפעלת הניתוב הבסיסי
app.use("/", router)

app.use((bodyParser))

//גישה למסד הנתונים
const settins = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect("mongodb://localhost:27017/Jewelry_db", settins)
//mongoose.connect("mongodb://localhost:27017/Jwelery_db", settins)

var db = mongoose.connection

db.on('open', () => {
    console.log("db connected!!");
})

//הרצה
const port = `1234`
app.listen(port, () => {
    console.log(`I'm running on port ${port}`);
})

