const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = server =>{
    server.use(bodyParser.json());
    server.use(pessoas)
    server.use(niveis)
    server.use(turmas)
    server.get('/',(req,res)=>res.send('teste'));
}