const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
// connect mongodb
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.sbunmxg.mongodb.net/?retryWrites=true&w=majority`;



app.set('view engine', 'ejs');


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



app.get('/', (req, res) => {
    res.render('index', { title: 'Index' });

})
app.get('/about', (req, res) => {

    res.render('about', { title: 'About' });
})
app.get('/create', (req, res) => {
    res.render('createblog', { title: 'CreateBlog' });
})
app.get('/aboutus', (req, res) => {
    res.redirect('/about');
})
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Error' });
})