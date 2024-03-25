const express=require('express');
const router = express.Router();

const { protect }=require("../middlewear/adminMiddlewear");

const {CreateAdmin, AdminLogin, AddProduct, alltermek, RemoveTermek,
    Rendelesek, Felhasznalok, AdminChatSendMessage,
    GetAdminChat,GetAdmin, AddParams}= require("../controllers/adminController")

router.post("/addadmin" , CreateAdmin);
router.post("/login", AdminLogin);
router.post("/addproduct",AddProduct);
router.get('/alltermek',alltermek);
router.post("/delete",RemoveTermek)
router.get('/rendelesek',Rendelesek)
router.get('/users',Felhasznalok)
router.post('/sendmsg',protect,AdminChatSendMessage)
router.get('/chat',GetAdminChat)
router.post('/who',protect,GetAdmin)
router.post('/addparams',AddParams)

module.exports= router;