const morgan = require("morgan");
const express = require("express");
const app = express();
const layout = require("./views/layout.js")
const { db } = require('./models')
const path = require("path");


app.listen(3000);

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })

//Body parsing middleware
app.use(express.urlencoded({ extended:false}));

//Static middleware. Serves up static files from some kind of public folder.
app.use(express.static(path.join(__dirname, "./public")));

//Logging middleware.
app.use(morgan('dev'));

//Body parsing middleware
app.get('/', (req, res) =>{
    res.send(layout())
})

//Body parsing middleware...use 'use' when their's another file handling our routes!!!
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     next()
//   })
