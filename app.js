const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

const Blogs = require('./models/blog');
const { result } = require('lodash');

// connect mongodb
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.sbunmxg.mongodb.net/blogs?retryWrites=true&w=majority`;

app.set('view engine', 'ejs');

//encoders
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

try {
    mongoose.connect(dbURI).then((res) => {
        console.log("DB connected");
        app.listen(3000, function () {
            console.log('listening on port 3000');
        });
    });
} catch (err) {
    console.log(err);
}

// Hit And Trial
app.get('/add-blog', (req, res) => {
    const blog = new Blogs({
        title: 'Hit And Trial',
        preview: 'Hit And Trial is a fictional blog about Hit And Trial.',
        body: 'Hit And Trial is a fictional blog about Hit And Trial. Hit And Trial is a fictional blog about Hit And Trial. Hit And Trial is a fictional blog about Hit'

    });
    blog.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/all-blogs', (req, res) => {
    Blogs.find().then((result) => {
        res.send(result);
    }).catch((err) => console.log(err));
})

app.get('/single-blog', (req, res) => {
    Blogs.findById('64650bda32338f1ea6237dd2').then((result) => {
        res.send(result);
    }).catch((err) => console.log(err));
})

app.get('/', (req, res) => {
    Blogs.find().then((result) => {
        res.render('index', { title: 'Index', blogs: result });
    }).catch((err) => console.log(err));

})
app.get('/about', (req, res) => {

    res.render('about', { title: 'About' });
})
app.get('/create', (req, res) => {
    res.render('createblog', { title: 'Create Blog' });
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Blogs.findById(id).then((result) => {
        res.render('details', { title: result.title, blog: result });
    }).catch((err) => console.log(err));
})


//post requests
app.post('/blogs', (req, res) => {
    // console.log(req.body);
    const blog = new Blogs(req.body);
    blog.save().then((result) => {
        res.redirect('/');
    }).catch((err) => console.log(err));
})

//Ends................................................................

// Delete requests

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blogs.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/' });
    }).catch((err) => console.log(err))

})

//Ends................................................................

app.get('/aboutus', (req, res) => {
    res.redirect('/about');
})
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Error' });
})