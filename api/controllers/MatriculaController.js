const Sequilize = require('sequelize')
const { MatriculasServices} = require('../services')
const matriculasServices = new MatriculasServices()

class MatriculaController{

    static async getMatricula(req,res){
        const{estudanteId,matriculaId}  = req.params
        try{
            const umaMatricula = await matriculasServices
            .pegaUmRegistro({id: matriculaId, estudante_id: estudanteId})
          return res.status(200).json(umaMatricula)
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaMatriculas(req, res) {  
        const { estudanteId } = req.params
        try {
          const matriculas = await pessoasServices
            .pegaMatriculasPorEstudante({ id: Number(estudanteId) })
          return res.status(200).json(matriculas)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    static async criarMatricula(req,res){
        const {estudanteId} = req.params
        const novaMatricula = {...req.body,estudante_id:Number(estudanteId)}
        try{
            const novaMatriculaCriada = await matriculasServices
            .criaRegistro(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        }catch(error){
            return res.status(500).json(error.message);
        }
            
    }

    static async alterarMatricula(req,res){
        const{estudanteId,matriculaId}  = req.params
        const novosDados = req.body
        try{
            await matriculasServices
                .atualizaRegistros(novosDados, { id: Number(matriculaId), estudante_id: Number(estudanteId) })
                return res.status(200).json({ mensagem: `id ${matriculaId} atualizado` })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagarMatricula(req,res){
        const{matriculaId}  = req.params
        try{
            await matriculasServices.apagaRegistro(Number(matriculaId))
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async restauraMatricula(req, res) {
        const { matriculaId } = req.params
        try {
            await matriculasServices.restauraRegistro(Number(matriculaId))
             return res.status(200).json({ mensagem: `id ${matriculaId} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    static async pegaMatriculasPorTurma(req,res){
        const {turmaId}=req.params
        try{
         const todasAsMatriculas = await matriculasServices
         .encontraEContaRegistros(
           { turma_id: Number(turmaId), status: 'confirmado' },
           { limit: 20, order: [['estudante_id', 'DESC']] })
         return res.status(200).json(todasAsMatriculas)
        }catch (error) {
            return res.status(500).json(error.message)
          }
    }

    static async pegaMatriculas(req,res){
        const {estudanteId}=req.params
        try{
            const pessoa = await database.Pessoas.findOne({where:{id: Number(estudanteId)}})
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        }catch (error) {
            return res.status(500).json(error.message)
          }
    }

    static async pegaTurmasLotadas(req,res){
 
        const lotacaoTurma = 2
        try{
            const turmasLotadas = await 
            matriculasServices.encontraEContaRegistros({ status: 'confirmado' },
              { 
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
              })
          return res.status(200).json(turmasLotadas.count)
        }catch (error) {
            return res.status(500).json(error.message)
          }
    }












     





}

module.exports = MatriculaController