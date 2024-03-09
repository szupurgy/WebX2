const {PrismaClient, Prisma} = require("@prisma/client");
const jwt=require("jsonwebtoken");
const arg2 = require('argon2');

const prisma= new PrismaClient();

const generateToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: '1d'})
}

const register= async(req,res) => {
    const{felhasznalonev,email,jelszo,telszam,szuldatum} = req.body;

    if(!email || !jelszo || !szuldatum || !telszam || !felhasznalonev){
        res.json({message:'Hiányos adatok!'})
        return;
    }
    //létező email cim ellenőrzése
    const user= await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(user){
        res.json({message:'Az email cím foglalt!'})
        return;
    }

    //argon 2 csomaggal hash
    const hashjelszo=await arg2.hash(jelszo);
    const ujUser=await prisma.user.create({
        data:{
            email:email,
            felhasznalonev:felhasznalonev,
            szuldatum:szuldatum,
            telszam:telszam,
            jelszo:hashjelszo
        }
    });

    const lakcim= await prisma.cim.create({
        data:{
            fid:ujUser.id
        }
    })

    const token= generateToken(ujUser.id);
    res.json({token: token});
    
}

const login= async (req,res)=>{
    const{email,jelszo} = req.body;
    if(!email||!jelszo){
        res.json('Hiányzó adat!');
        return;
    }
    const user= await prisma.user.findFirst({
        where:{
            email:email
        }
    });

    if(!user){
        res.json({message:"Felhasználó nem található!"});
        return;
    }

    if(!(await arg2.verify(user.jelszo,jelszo))){
        res.json({message:"Nem megfelelő jelszó!"});
        return;
    }

    const token=generateToken(user.id);
    res.json({token:token});

    
}

const getUsers=(req,res)=>{
    res.json(req.user)
}

const getUserDeliveryAddress= async(req,res)=>{
    const user = req.user;
    const deliveryAddress =await prisma.cim.findFirst({
        where:{
            fid:user.id
        }
    })
    res.json(deliveryAddress)
}

const emailCheck= async (req,res)=>{
    const{email} = req.body;
    if(!email){
        res.json('Hiányzó adat!');
        return;
    }
    const user= await prisma.user.findFirst({
        where:{
            email:email
        }
    });

    if(user){
        res.json({message:"Az email cím foglalt!"});
        return;
    } else {
        res.json({success:"Az email cím szabad"});
        return;
    }
}


module.exports = {
    register,
    login,
    getUsers,
    emailCheck,
    getUserDeliveryAddress
}