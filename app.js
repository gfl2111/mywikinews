const express = require("express");
const morgan = require("morgan");
const app = express();


//Body parsing middleware
app.use(express.urlencoded({ extended:false}));

//Static middleware. Serves up static files from some kind of public folder.
app.use(express.static(__dirname));

//Logging middleware.
app.use(morgan('dev'));

//Body parsing middleware
app.get('/', (req, res) =>{
    res.send('<h1>hello world</h1>')
})

//Body parsing middleware...use 'use' when their's another file handling our routes!!!
// app.use(function (req, res, next) {  
//     console.log('Time:', Date.now())
//     next()
//   })