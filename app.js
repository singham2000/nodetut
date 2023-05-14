const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.listen(3000, function () {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    // res.send('<h1>Running...</h1>');
    // res.sendFile('./views/index.html', { root: __dirname })
    res.render('index', { title: 'Index' });

})
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' });
})
app.get('/create', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('createblog', { title: 'CreateBlog' });
})
app.get('/aboutus', (req, res) => {
    res.redirect('/about');
})
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Error' });
})