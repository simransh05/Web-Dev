const express  = require('express');
const app = express();
const port=3000;

const path = require('path');
const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath))
app.listen(port,()=>{
    console.log(`server is running on https://localHost:${port}`)
})
