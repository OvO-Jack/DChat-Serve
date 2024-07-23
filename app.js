const express = require("express");
const router = require('./router')
const cors = require('cors')
const morgan = require('morgan')
const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(morgan('dev'))
app.use("/api", router);

app.use((req,res,next)=>{
    res.status(404).send('404 Not Found')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
