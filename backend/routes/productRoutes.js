const express=require('express');
const router = express.Router();

const {getAllProduct} = require('../controllers/productControllers')

router.get('/all',getAllProduct);

module.exports= router;