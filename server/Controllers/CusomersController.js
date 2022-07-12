"use strict"

const express = require("express")
const router=express.Router()
const GenericController = require("./GenericController")
const Customers=require("../Models/Customers")

router.get("/GetAllCustumers", async (req, res) => {
    GenericController.GetAllData(req, res,Customers)
})

router.get("/GetCustumerById/:id", (req, res) => {
    GenericController.GetDataById(req, res)
})



module.exports = router
