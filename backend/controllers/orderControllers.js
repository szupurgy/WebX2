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

module.exports = {
    MakeOrder
}