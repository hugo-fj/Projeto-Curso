const { Router } = require('express');

const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

//Paga todas a pessoas registradas ativa ou não
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);

//Paga todas a pessoas ativa 
router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)

//Pegando uma Pessoa
router.get('/pessoas/:id',PessoaController.getPessoa);


//Cria Pessoa
router.post('/pessoas',PessoaController.criarPessoa);

//Atualizar Pessoa
router.put('/pessoas/:id',PessoaController.alterarPessoa);

//apagar Pessoa
router.delete('/pessoas/:id',PessoaController.apagarPessoa);

//Restaurar Pessoa
router.post('/pessoas/:id/restaura',PessoaController.restauraPessoa);

//Cancela Pessoa
router.post('/pessoas/:estudanteId/cancela',PessoaController.cancelaPessoa);

router.get('/pessoas/matricula/lotada',MatriculaController.pegaTurmasLotadas)




router.get('/pessoas/:estudanteId/matricula/:matriculaId',MatriculaController.getMatricula);

router.get('/pessoas/:estudanteId/matricula',MatriculaController.pegaMatriculas);
router.get('/pessoas/matricula/:turmaId/confirmadas',MatriculaController.pegaMatriculasPorTurma)

router.post('/pessoas/:estudanteId/matricula',MatriculaController.criarMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId',MatriculaController.alterarMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',MatriculaController.apagarMatricula);


module.exports = router
