const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); 

// say to node that we're using the json standard to do the comunication among requests: 
app.use(express.json());
app.use(routes);

app.listen(3333);