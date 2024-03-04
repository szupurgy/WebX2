const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");

const {register, login, getUsers, emailCheck, getUserDeliveryAddress} = require('../controllers/userControllers')

router.post('/register',register);
router.post('/login',login);
router.post('/emailCheck',emailCheck);
router.get('/me',protect,getUsers);
router.get('/address',protect,getUserDeliveryAddress);

module.exports= router;