const {PrismaClient, Prisma} = require("@prisma/client");
const jwt=require("jsonwebtoken");

const prisma= new PrismaClient();

const MakeOrder = async(req,res) => {
    const {tmkid, szalmod,fizmod} = req.body;
    const user = req.user;

    if (!tmkid ||!szalmod ||!fizmod) {
        res.json('Hiányzó adat!');
        return;
    }
    try {
        const cid= await prisma.cim.findFirst({
            where:{
                fid:user.id
            }
        })
        console.log(cid);
        const order = await prisma.rendeles.create({
            data:{
                CimID:cid.id,
                TmkID:tmkid,
                floID:user.id,
                SzalMod:szalmod,
                fizMod:fizmod
            }
        })
        res.json("Sikeres megrendelés");
    } catch (err) {
        res.json(err.message);
    }
}

module.exports = {
    MakeOrder
}