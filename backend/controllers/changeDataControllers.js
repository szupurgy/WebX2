const {PrismaClient, Prisma} = require("@prisma/client");
const arg2= require('argon2');
const prisma= new PrismaClient();

const ChangeName= async(req,res)=>{
    const felhasznalonev=req.body;
    if(!felhasznalonev){
        res.json('Hiányzó adat!');
        return;
    }
    try {
        const setName = await prisma.user.update(
            {
                where:{
                    id:req.user.id
                },
                data:{
                    felhasznalonev
                }
            }
        )
        res.json(setName);
    } catch (err) {
        res.json(err.message);
    }
}

const ChangePassword= async(req,res)=>{
    const jelszo=req.body;
    if(!jelszo){
        res.json('Hiányzó adat!');
        return;
    }
    try {
        const hashjelszo=await arg2.hash(jelszo);
        const setPass = await prisma.user.update(
            {
                where:{
                    id:req.user.id
                },
                data:{
                    hashjelszo
                }
            }
        )
        res.json(setPass);
    } catch (err) {
        res.json(err.message);
    }
}

module.exports = {
    ChangeName,
    ChangePassword
}