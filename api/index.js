const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const porta = 5000;
const server = express();

server.use(cors());
routes(server);


server.listen(porta,()=>{
    console.log(`Aplicação sendo executado em http://localhost:${porta}`)
});
module.exports = server;
