import express from 'express'
import { addAuthor, getAuthors ,deleteAuthor} from '../Controller/authorController.js'

const router = express.Router()

router.post('/add-author',addAuthor)
router.get('/get-author',getAuthors)
router.delete('/delete-author',deleteAuthor)

export default router;