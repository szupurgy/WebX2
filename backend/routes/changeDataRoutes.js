const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");

const {ChangeName,ChangePassword}= require("../controllers/changeDataControllers")

router.post("/changename" , protect , ChangeName);
router.post("/changepassword" , protect , ChangePassword);


module.exports= router;