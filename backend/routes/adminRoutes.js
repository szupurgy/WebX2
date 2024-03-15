const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/adminMiddlewear");

const {CreateAdmin, AdminLogin}= require("../controllers/adminController")

router.post("/addadmin" , CreateAdmin);
router.post("/login", AdminLogin);

module.exports= router;