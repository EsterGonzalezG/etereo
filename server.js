
const express = require('express');
const parser = require('body-parser');
const port = 3001;
const api = express();
var cors = require('cors');
api.use(parser.json());
const http = require('http');
const fs = require('fs');

api.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

const phones = JSON.parse(fs.readFileSync('./data/phones.json', 'utf8'));


api.get('/phones', (req, res) => {
    res.status(200).send(phones)
})

api.listen(port, () => console.log('Servidor escuchando en puerto ' + port));