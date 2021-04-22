const { Router } = require('express');

const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.getTurmas);
router.get('/turmas/:id',TurmaController.getTurma);
router.post('/turmas',TurmaController.criarTurma);
router.post('/turmas/:id/restaura', TurmaController.restauraTurma)
router.put('/turmas/:id',TurmaController.alterarTurma);
router.delete('/turmas/:id',TurmaController.apagarTurma);

module.exports = router