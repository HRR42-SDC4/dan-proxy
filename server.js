const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.use(proxy('/api/images', {target: 'http://localhost:3001/' }));
// app.use(proxy('/api/articles', {target: 'http://localhost:3003/' }));
app.use(proxy('/api/restaurants', {target: 'http://ec2-52-53-141-120.us-west-1.compute.amazonaws.com' }));

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server running on port: ${port}`));
