const express=require('express');
const router = express.Router();

const {protect}=require("../middlewear/authMiddlewear");

const {register, login, getUsers} = require('../controllers/userControllers')

router.post('/register',register);
router.post('/login',login);

router.get('/me',protect,getUsers);

module.exports= router;