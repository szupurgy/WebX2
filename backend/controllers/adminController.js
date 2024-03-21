const {PrismaClient, Prisma} = require("@prisma/client");
const jwt=require("jsonwebtoken");
const arg2= require('argon2');
const prisma= new PrismaClient();

const generateToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: '1d'})
}

const CreateAdmin = async (req, res) => {
    const {nev,jelszo} = req.body;
    if (!nev || !jelszo) {
        res.json("Hiba!")
        return;
    }
    let titkosjelszo = await arg2.hash(jelszo);
    const CreateAdminUser = await prisma.admin.create({
        data:{
            nev:nev,
            jelszo:titkosjelszo
        }
    })


    const token= generateToken(CreateAdminUser.id);
    res.json({token: token});
}

const AdminLogin = async (req, res) => {
    const {nev,jelszo} = req.body;
    if (!nev ||!jelszo) {
        res.json({message: "hiba!"})
        return;
    }
    const user= await prisma.admin.findFirst({
        where:{
            nev:nev
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

const alltermek= async(req,res) => {
    const termek = await prisma.termek.findMany({
        include:{
            termekkepek:true
        }
    });
    res.json(termek);
}

const AddProduct = async(req, res) => {
    const {nev,leiras,ar,akcios,akciosar} = req.body;
    if (!nev || !leiras || !ar || !akciosar) {
        console.log(req.body);
        res.json("Hiányzó adatok!");
        return;
    }
    const termek = await prisma.termek.create({
        data:{
            nev:nev,
            leiras:leiras,
            ar:Number(ar),
            akcios:Boolean(akcios),
            akciosar:Number(akciosar)
        }
    })
    res.json(termek);
}

const GetAdminChat= async(req,res)=>{
    const chat=await prisma.adminchat.findMany({
        select:{
            message:true,
            datum:true,
            userid:true
        }
    })
    res.json(chat);
}

const GetAdmin= async(req,res)=>{
    res.json(req.user)
}

const AdminChatSendMessage=async(req,res)=>{
    const {text} = req.body;
    if(!text){
        res.json("Hiányzó adat!");
        return;
    }
    const kuldes= await prisma.adminchat.create({
        data:{
            userid: req.user.id,
            message: text,
        }
    })
    res.json(kuldes);
}

const RemoveTermek = async(req,res) => {
    const {id}=req.body;
    if(!id){
        res.json("Hiányzó adat!");
        return;
    }
    try {
        const termektorol= await prisma.termek.delete({
            where:{
                id:id
            }
        })
        res.json("Sikeres törlés")
    } catch (err) {
        res.json(err.message)
    }
}

const Rendelesek= async(req,res)=>{
    const rendelesek = await prisma.rendeles.findMany({
        include:{
            Felhasznalo: {
                select:{
                    felhasznalonev:true
                }
            },
            Termek:{
                select:{
                    nev:true,
                }
            },
            Cim:{
                select:{
                    orszag:true,
                    varos:true,
                    utca:true,
                    hazszam:true
                }
            }
        }
    });
    res.json(rendelesek)
}

const Felhasznalok= async(req,res) => {
    const users = await prisma.user.findMany();
    res.json(users)
}

module.exports = {
    CreateAdmin,
    AdminLogin,
    AddProduct,
    alltermek,
    RemoveTermek,
    Rendelesek,
    Felhasznalok,
    AdminChatSendMessage,
    GetAdminChat,
    GetAdmin
}