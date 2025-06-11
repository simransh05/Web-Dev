import express from 'express';

import {addBook, getBook,deleteBook} from '../Controller/bookController.js';      


const router = express.Router();

router.post('/add-book', addBook);

//router.get('/get-books', );


router.get('/get-book', getBook);
router.delete('/delete-book',deleteBook)

export default router;