// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// all environments
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

// include ROUTES & APIs
const api = require('./routes/api');
app.use('/api',api);

console.log('http://localhost:3000');
app.listen(3000);
