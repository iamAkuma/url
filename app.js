const express = require('express');
const shortId = require('shortid');
const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs');

app.get('/', async(req, res, next)=> {
    res.render('index')
})

app.listen(3000, () => console.log('Server on port 3000'))