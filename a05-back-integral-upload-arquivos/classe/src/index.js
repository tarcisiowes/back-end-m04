const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

require('dotenv').config()

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(cors());
app.use(rotas);

app.listen(3000);