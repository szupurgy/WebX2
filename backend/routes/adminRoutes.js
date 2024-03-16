const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/adminMiddlewear");

const {CreateAdmin, AdminLogin, AddProduct, alltermek, RemoveTermek}= require("../controllers/adminController")

router.post("/addadmin" , CreateAdmin);
router.post("/login", AdminLogin);
router.post("/addproduct",AddProduct);
router.get('/alltermek',alltermek);
router.post("/delete",RemoveTermek)

module.exports= router;