const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = 3000;
const User = require('./Model/user');

app.set('view engine', 'hbs');  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {    
    res.render('index');
});

app.get('/register', (req, res) => {
    if(req.session.user) {
        return res.redirect('/profile');
    }
    res.render('register');
});


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.render('register', { msg: 'All fields are required' });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('register', { msg: 'Email already registered' });
        }

        // Save user to DB
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/login', (req, res) => {
    if(req.session.user) {
        return res.redirect('/profile');
    }
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('login', { msg: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.render('login', { msg: 'Invalid credentials' });
        }

        req.session.user = { name: user.name, email: user.email }; // Store in session
        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    res.render('profile', {
        name: req.session.user.name,
        email: req.session.user.email
    });
});


app.get('/logout', (req, res) => {
    if(!req.session.user) {
        return res.redirect('/login');
    }
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/profile');
        }
        res.redirect('/');
    });
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {   
    console.error( error);
})