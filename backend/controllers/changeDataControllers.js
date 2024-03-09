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
    const {jelszo}=req.body;
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
                    jelszo: hashjelszo
                }
            }
        )
        res.json(setPass);
    } catch (err) {
        res.json(err.message);
    }
}

const ChangeTelSzul= async(req, res) => {
    const {telszam,szuldatum} = req.body;

    if (!telszam || !szuldatum) {
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
                    telszam:telszam,
                    szuldatum:szuldatum
                }
            }
        )
        res.json(setName);
    } catch (err) {
        res.json(err.message);
    }
}

const ChangeDelivery=async (req, res) => {
    const {orszag, varos, iranyitoszam,utca,hazszam} = req.body;
    if (!orszag || !utca || !hazszam || !varos || !iranyitoszam) {
        res.json('Hiányzó adat!');
        return;
    }
    try {
        const setDelivery = await prisma.cim.update(
            {
                where:{
                    fid:req.user.id
                },
                data:{
                    orszag:orszag,
                    varos:varos,
                    iranyitoszam:iranyitoszam,
                    utca:utca,
                    hazszam:hazszam
                }
            }
        )
        res.json(setDelivery);
    } catch (err) {
        res.json(err.message);
    }
}

module.exports = {
    ChangeName,
    ChangePassword,
    ChangeTelSzul,
    ChangeDelivery
}