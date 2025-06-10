import book from '../models/book.js';
import author from '../models/author.js';


async function addBook(req, res) {
    let { name, year, authorName } = req.body;

    if (!name || !authorName) {
        return res.status(400).json({ message: 'Name and author are required' });
    }

    try {

        let authorData = await author.findOne({ name: authorName });

        if (!authorData) {
            authorData = await author.create({
                name: authorName,
            });
        }

        let bookData = await book.insertOne({
            name,
            year,
            author: authorData._id
        });

        console.log(bookData)

        if (authorData.books) {
            authorData.books = [...authorData.books, bookData._id];
        } else {
            authorData.books = [bookData._id];
        }

        await authorData.save();

        res.status(201).json({ message: 'Book added successfully', book: bookData });

    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error: error.message });
    }
}


async function getBook(req, res) {
    let { name } = req.query;
    console.log(name)
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    try {
        let bookData = await book.findOne({ name: name }).populate('author');
        res.status(200).json({ message: 'Book found', book: bookData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error: error.message });
    }
}

async function deleteBook(req, res) {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Book name is required' });
    }

    try {
        // Step 1: Find the book
        const bookData = await book.findOne({ name });

        if (!bookData) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Step 2: Find the author
        const authorData = await author.findById(bookData.author);

        // Step 3: Remove book from author's books array
        if (authorData && authorData.books) {
            authorData.books = authorData.books.filter(bookId => bookId.toString() !== bookData._id.toString());
            await authorData.save();
        }

        // Step 4: Delete the book
        await book.deleteOne({ _id: bookData._id });
        res.status(200).json({ message: 'Book deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
}

export { addBook, getBook, deleteBook };
