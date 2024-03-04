const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");

const {ChangeName}= require("../controllers/changeDataControllers")

router.post("/changename" , protect , ChangeName);


module.exports= router;