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



module.exports = {
    CreateAdmin,
    AdminLogin
}