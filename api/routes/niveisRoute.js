const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.getNiveis)
router.get('/niveis/:id', NivelController.getNivel)
router.post('/niveis', NivelController.criarNivel)
router.post('/niveis/:id/restaura', NivelController.restauraNivel)
router.put('/niveis/:id', NivelController.alterarNivel)
router.delete('/niveis/:id', NivelController.apagarNivel)
module.exports = router    