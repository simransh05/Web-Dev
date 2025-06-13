import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import authorRouter from './Routes/authorRouter.js';
import bookRouter from './Routes/bookRouter.js';    

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/author', authorRouter);
app.use('/book', bookRouter);

const Port = 3000;


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(Port, () => {
        console.log(`Server is running on http://localhost:${Port}`);
    });
}).catch((error) => {   
    console.error( error);
})
