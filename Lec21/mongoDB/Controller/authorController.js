import author from '../models/author.js';
import book from '../models/book.js';


async function addAuthor (req, res) {
    let {name, age,books} = req.body;

    if (!name) {
        return res.status(400).json({message: 'Name is required'});
    }

    try {

        let authorData = await author.findOne({name: name});
        if(! authorData) {
            authorData = await author.insertOne({
                name: name,
                age: age,
            }); 
        } 
        
        books = books.map((book)=>{
            return{
                ...book,
                author: authorData._id
            }
        })

        let booksData = await book.insertMany(books);
        let bookIds = booksData.map((book) => book._id);
        authorData.books = [...authorData.books, ...bookIds];

        authorData = await authorData.save();

        res.status(201).json({message: 'Author added successfully', author});

        
    } catch (error) {
        res.status(500).json({message: 'Error adding author', error: error.message});
    }
} 


async function getAuthors(req, res) {

    let {name} = req.query;

    if(!name){
        res.status(400).json({message: 'Name is required'});
    }
    try {
        let authorData = await author.findOne({name: name}).populate('books');
        if (!authorData) {
            return res.status(404).json({message: 'Author not found'});
        }

        res.status(200).json({message: 'Author found', authorData});    
    } catch (error) {
        res.status(500).json({message: 'Error fetching author', error: error.message});
    }
}

async function deleteAuthor(req, res) {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    try {
        let existingAuthor = await author.findOne({ name });

        if (!existingAuthor) {
            return res.status(404).json({ message: 'Author not found' });
        }

        // Step 1: Delete the books written by the author
        await book.deleteMany({ _id: { $in: existingAuthor.books } });

        // Step 2: Delete the author
        await author.deleteOne({ _id: existingAuthor._id });

        res.status(200).json({ message: 'Author and their books deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting author', error: error.message });
    }
}


export {addAuthor, getAuthors,deleteAuthor};