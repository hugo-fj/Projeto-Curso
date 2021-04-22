//const database = require('../models');

const { NiveisServices} = require('../services')
const niveisServices = new NiveisServices()

class NivelController {

    static async getNiveis(req, res) {
      try {
        const todasOsNiveis = await niveisServices.pegaTodosOsRegistros()
        return res.status(200).json(todasOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async getNivel(req,res){
        const{id}  = req.params
        try{
            const  umNivel = await niveisServices.pegaUmRegistro({id})
            return res.status(200).json(umNivel);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criarNivel(req,res){
        const novoNivel = req.body
        try{
            const novoNivelCriado = await niveisServices.criaRegistro(novoNivel)
            return res.status(200).json(novoNivelCriado)

        }catch(error){
            return res.status(500).json(error.message);
        }
            
    }
    static async alterarNivel(req,res){
        const{id}  = req.params
        const novosDados = req.body
        try{
            await niveisServices.atualizaRegistro(novosDados,id)
            return res.status(200).json({ mensagem: `id ${id} atualizado` })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagarNivel(req,res){
        const{id} = req.params
        try{
            await niveisServices.apagaRegistro(id)
            return res.status(200).json({mensagem:`id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async restauraNivel(req, res) {  
        const { id } = req.params
        try {
          await niveisServices.restauraRegistro(id)
          return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }


}

module.exports = NivelController