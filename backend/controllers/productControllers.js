const {PrismaClient, Prisma} = require("@prisma/client");
const jwt=require("jsonwebtoken");
const arg2= require('argon2');

const prisma= new PrismaClient();

const getAllProduct= async (req,res)=>{
    const response= await prisma.termek.findMany();
    res.json(response);
}

const getProductById = async (req, res) => {
    const { id } = req.body
    const product = await prisma.termek.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(product)
}

const addToCart= async (req, res) => {
    const { tid } = req.body ;
    try {
        const addToCart = await prisma.kosar.create(
            {
                data:{
                    floID:req.user.id,
                    TmkID:tid
                }
            }
        )
        res.json("Kosárba helyezve!")
    } catch (err) {
        res.json(err.message)
    }
}

const kosarTartalom= async (req, res) => {
    try {
        const kosar= await prisma.kosar.findMany(
            {
                where:{
                    floID:req.user.id
                },
                select:{
                    id:false,
                    floID:true,
                    TmkID:true,
                }
            }
        )
        res.json(kosar)   
    } catch (err) {
        res.json(err.message)
    }
}

module.exports = {
    getAllProduct,
    getProductById,
    addToCart,
    kosarTartalom
}