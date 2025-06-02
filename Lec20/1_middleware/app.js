const express = require('express')
const app = express()
const port = 4000;

// generic middleware to log request details

app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url} in middleware 1`)
    // res.send('hello from middleware 1')
    next()
})

app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url} in middleware 2`)
    next();
})
// path matching middleware
app.use('/hello/:id',(req,res,next)=>{
    console.log('inside path matching middleware');
    // res.send(`hello from the path matching middleware! ${req.params.id}`)
    next()
})

// exact path matching middleware

app.use('/hello/world',(req,res,next)=>{
    console.log('inside exact path matching middleware')
    res.send('hello from the exact path matching middleware')
    next()
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})