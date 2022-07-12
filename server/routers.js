const GenericController=require('./Controllers/GenericController')
const CustomersController=require('./Controllers/CusomersController')
const CategoryController=require('./Controllers/CategoryController')
const router=require("express").Router()

//טעינת הקונטרולר
//נתינת ניתוב ראשי
//router.use("/api/GenericController",GenericController)
router.use("/api/CustomersController",CustomersController)
router.use("/api/CategoryController",CategoryController)
module.exports=router