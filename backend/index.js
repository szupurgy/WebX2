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

app.post("/tesztgeci", uploads.single('image'), async (req, res) => {
    const { TmkID } = req.body
    
    console.log(TmkID)
    res.send("fasz")
})

app.post("/upload", uploads.single('image'), async (req, res) => {
    try {
        if (req.file && req.body) {
            const data = {
                filename: req.file.filename,
                bodyform: req.body
            }
            const { TmkID } = data.bodyform;
            const filename  = data.filename;
            
            const kepfeltoltes = await prisma.termekkepek.create({
                data: {
                    TmkID: Number(TmkID),
                    kep: filename
                }
            })
            res.send("Sikeres feltöltés");
        } else{
            console.log(req.body)
            console.log(req.file)
            res.json(req.body.image)

        }
    } catch (err) {
        res.json(err.message)
    }
})

app.use("/uploads", express.static('uploads'))

