const {PrismaClient, Prisma} = require("@prisma/client");
const arg2= require('argon2');
const prisma= new PrismaClient();

const ChangeName= async(req,res)=>{
    const felhasznalonev=req.body;
    console.log(req.user.id)
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

module.exports = {
    ChangeName
}