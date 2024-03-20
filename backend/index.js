const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const PORT = 8000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync("./uploads")) {
            fs.mkdirSync('./uploads')
        }
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const uid = uuidv4();
        const ext = file.mimetype.split('/').pop();
        cb(null, `${uid}.${ext}`);
    }
})

const uploads = multer({
    storage,
    limits: {
        fileSize: 5000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
});

app.use('/user', require('./routes/userRoutes'))
app.use('/admin', require('./routes/adminRoutes'))
app.use('/product', require('./routes/productRoutes'))
app.use('/new', require('./routes/changeDataRoutes'))
app.use('/order', require('./routes/orderRouters'))

app.post("/upload", uploads.single('image'), async (req, res) => {
    try {
        if (req.file && req.body) {
            const data = {
                filename: req.file.name,
                bodyform: req.body
            }
            const { TmkID } = data.bodyform;
            const filename  = data.filename;
            console.log(filename)
            const kepfeltoltes = await prisma.termekkepek.create({
                data: {
                    TmkID: Number(TmkID),
                    kep: filename
                }
            })
            res.json(kepfeltoltes);
        } else{
            res.json("halo")
        }
    } catch (err) {
        res.json(err.message)
    }
})

app.get("/getkep/:name", async(req, res) => {
    const imgname= req.params.name;
    if (!imgname || imgname === '') {
        res.status(404).send('Bad request')
        return;
    }

    const filepath = path.join(__dirname,'uploads',imgname);
    const fileexists = fs.existsSync(filepath);
    if (!fileexists) {
        res.status(404).send('File does not exist')
        return;
    }
    const imgdata= await fs.promises.readFile(filepath);
    res.contentType('image/jpeg');
    res.send(imgdata);
})

