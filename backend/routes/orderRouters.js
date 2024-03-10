const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");
const {MakeOrder} = require('../controllers/orderControllers')

router.post('/MakeOrder',protect,MakeOrder);

module.exports= router;