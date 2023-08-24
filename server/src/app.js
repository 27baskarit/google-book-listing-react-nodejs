const express = require('express');
const xss = require('xss-clean');
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require('./routes');
const app = express();


// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// enable cors
app.use(cors());
app.options('*', cors());


// api routes
app.use('/', routes);


const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
