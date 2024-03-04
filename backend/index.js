const express= require("express");
const cors= require("cors");

const app= express();
const PORT=8000;

app.use(express.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Listening on: ${PORT}`);
});

app.use('/user',require('./routes/userRoutes'))
app.use('/product',require('./routes/productRoutes'))
app.use('/new',require('./routes/changeDataRoutes'))