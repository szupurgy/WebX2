const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");
const {MakeOrder, GetOrderData} = require('../controllers/orderControllers')

router.post('/MakeOrder',protect,MakeOrder);
router.get('/GetOrder/:id',GetOrderData);

module.exports= router;