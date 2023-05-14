const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.listen(3000, function () {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    // res.send('<h1>Running...</h1>');
    res.sendFile('./views/index.html', { root: __dirname })

})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})
app.get('/aboutUS', (req, res) => {
    res.redirect('/about');
})
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})