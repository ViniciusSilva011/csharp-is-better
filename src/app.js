const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

app.set('views', viewsPath);
app.set('view engine', 'hbs');
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up on port 3000.');
});