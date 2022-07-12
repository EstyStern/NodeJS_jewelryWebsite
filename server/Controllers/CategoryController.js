"use strict"

const express = require("express")
const router=express.Router()
const GenericController = require("./GenericController")
const Category=require("../Models/Category")

router.get("/GetAllCategory", async (req, res) => {
    GenericController.GetAllData(req, res,Category)
})

router.get("/GetCategoryById/:id", async(req, res) => {
    GenericController.GetDataById(req, res,Category)
})

router.post("/AddNewCategoty", async(req, res) => {
    console.log("req",req.body);
    GenericController.AddItem(req,res,Category)
})
module.exports = router

