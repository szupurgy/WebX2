const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");

const {ChangeName,ChangePassword,ChangeTelSzul,ChangeDelivery}= require("../controllers/changeDataControllers")

router.post("/changename" , protect , ChangeName);
router.post("/changepassword" , protect , ChangePassword);
router.post("/changetelszul" , protect , ChangeTelSzul);
router.post("/changedelivery", protect, ChangeDelivery);


module.exports= router;