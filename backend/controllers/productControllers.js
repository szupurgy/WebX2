const {PrismaClient, Prisma} = require("@prisma/client");
const jwt=require("jsonwebtoken");
const arg2= require('argon2');

const prisma= new PrismaClient();

const getAllProduct= async (req,res)=>{
    const response= await prisma.termek.findMany();
    res.json(response);
}

module.exports = {
    getAllProduct
}