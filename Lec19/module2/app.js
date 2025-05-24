const express  = require('express');
const app = express();
const port=3000;

const path = require('path');
const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath))
app.use(express.json());

app.get('/tasks',(req,res)=>{
    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:"Utf-8"})
    .then((data)=>{
        const tasks = JSON.parse(data);
        res.send(tasks);
    }).catch((err)=>{
        console.log('error inreading tasks',err)
    })
})

app.post('/tasks',(req,res)=>{
    fs.readFile(path.join(__dirname,'tasks.json'),{encoding:"Utf-8"})
    .then((data)=>{
        const tasks = JSON.parse(data);
        res.send(tasks);
    }).catch((err)=>{
        console.log('error inreading tasks',err)
    })
})

let tasks=[
    {text:'Task 1', completed:false},
    {text:'Task 2', completed:false},
    {text:'Task 3', completed:false},
];

app.get('/tasks',(req,res)=>{
    res.send(tasks)
})
app.post('/tasks',(req,res)=>{
    const newTasks = req.body.tasks;
    tasks=newTasks;
    res.status(200).send('task updated successfully')
})
app.listen(port,()=>{
    console.log(`server is running on https://localHost:${port}`)
})

// homework 
// create api for delete , update , add and edit