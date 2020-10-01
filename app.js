const morgan = require("morgan");
const express = require("express");
const app = express();

app.listen(1337);

app.use(morgan('dev'));

app.use(express.static(__dirname + "./public"));

app.use(express.urlencoded({ extented: false }));

app.get('/', (req, res, next) => {
  res.send(`<h1>Hello World</h1>`)
})
