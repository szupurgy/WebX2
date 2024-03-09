const {PrismaClient, Prisma} = require("@prisma/client");
const jwt=require("jsonwebtoken");
const arg2= require('argon2');

const prisma= new PrismaClient();

const getAllProduct= async (req,res)=>{
    const response= await prisma.termekek.findMany();
    res.json(response);
}

const getProductById = async (req, res) => {
    const { id } = req.body
    const product = await prisma.termekek.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(product)
}

module.exports = {
    getAllProduct,
    getProductById
}