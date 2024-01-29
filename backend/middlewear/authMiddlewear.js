const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();
const jwt= require('jsonwebtoken');

const protect = async(req,res,next)=>{
    let token;
    console.log(req.headers)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const ifFromToken=jwt.verify(token, process.env.JWT_SECRET);
            req.user= await prisma.user.findUnique({
                where:{
                    id:ifFromToken.id
                },
                select:{
                    id:true,
                    email:true,
                    felhasznalonev:true,
                    telszam:true,
                    szulev:true
                }
            });
            console.log(req.user)
            next();
        } catch(error){
            res.status(401).json({message:"Gondok vannak!"})
        }

        
    }
    if(!token){
        res.json({message:"Be kell jelentkezni!"})
    }
}

module.exports={
    protect
};