const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/adminMiddlewear");

const {CreateAdmin, AdminLogin, AddProduct, alltermek}= require("../controllers/adminController")

router.post("/addadmin" , CreateAdmin);
router.post("/login", AdminLogin);
router.post("/addproduct",AddProduct);
router.get('/alltermek',alltermek);

module.exports= router;