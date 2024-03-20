const { PrismaClient, Prisma } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const MakeOrder = async (req, res) => {
    const { tmkid, szalmod, fizmod, jelenlegiar, mennyiseg, rendelesazonosito } = req.body;
    const user = req.user;

    if (!tmkid || !szalmod || !fizmod || !jelenlegiar || !mennyiseg || !rendelesazonosito) {
        res.json('Hiányzó adat!');
        return;
    }
    try {
        const cid = await prisma.cim.findFirst({
            where: {
                fid: user.id
            }
        })
        console.log(cid);
        const order = await prisma.rendeles.create({
            data: {
                CimID: cid.id,
                TmkID: tmkid,
                floID: user.id,
                SzalMod: szalmod,
                fizMod: fizmod,
                jelenlegiar: jelenlegiar,
                mennyiseg: mennyiseg,
                rendelesazonosito: rendelesazonosito
            }
        })
        res.json("Sikeres megrendelés");
    } catch (err) {
        res.json(err.message);
    }
}

const GetOrderData= async(req, res) => {
    const {id}=req.params;
    if (!id) {
        res.json('Nincs rendelés azonosító!');
        return;
    }
    const getrendeles= await prisma.rendeles.findMany({
        where: {
            rendelesazonosito: id
        },
        select:{
            id:true,
            datum:true,
            Cim:true,
            Termek:true,
            Felhasznalo:true,
            SzalMod:true,
            fizMod:true,
            jelenlegiar:true,
            mennyiseg:true,
            rendelesazonosito:true
        }
    })
    res.json(getrendeles);
}


module.exports = {
    MakeOrder,
    GetOrderData
}