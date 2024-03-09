const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");
const {getAllProduct, getProductById} = require('../controllers/productControllers')

router.get('/all',getAllProduct);
router.post('/getProduct', getProductById)

module.exports= router;