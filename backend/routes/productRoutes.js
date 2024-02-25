const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");
const {getAllProduct, getProductById , addToCart , kosarTartalom} = require('../controllers/productControllers')

router.get('/all',getAllProduct);
router.post('/getProduct', getProductById)
router.post("/addCart" , protect , addToCart)
router.post("/kosaram", protect , kosarTartalom)

module.exports= router;