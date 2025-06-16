const path = require('path');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./Model/user');

dotenv.config();
const app = express();
const port = 3000;

// Set view engine and middleware
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
}));

// Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Register page
app.get('/register', (req, res) => {
    if (req.session.user) return res.redirect('/profile');
    res.render('register');
});

// Register logic
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.render('register', { msg: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('register', { msg: 'Email already registered' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Login page
app.get('/login', (req, res) => {
    if (req.session.user) return res.redirect('/profile');
    res.render('login');
});

// Login logic
app.post('/login', async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.render('login', { msg: 'Name and password are required' });
    }

    try {
        const user = await User.findOne({ name, password });

        if (!user) {
            return res.render('login', { msg: 'Invalid credentials' });
        }

        req.session.user = { name: user.name, email: user.email };

        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Profile page
app.get('/profile', (req, res) => {
    if (!req.session.user) return res.redirect('/login');

    res.render('profile', {
        name: req.session.user.name,
        email: req.session.user.email,
    });
});

// Logout
app.get('/logout', (req, res) => {
    if (!req.session.user) return res.redirect('/login');

    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/profile');
        }
        res.redirect('/');
    });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error( error);
    });
