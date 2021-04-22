//const database = require('../models');
//const Sequelize=require('sequelize');

const { PessoasServices} = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController{

    static async pegaPessoasAtivas(req,res){
        try{
            const pessoasAtivas =await  pessoasServices.pegaRegistrosAtivos()
            return res.status(200).json(pessoasAtivas)
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }

    static async pegaTodasAsPessoas(req, res){
        try {
          const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
          return res.status(200).json(todasAsPessoas)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    static async getPessoa(req,res){
        const{id}  = req.params
        try{
            const  umaPessoa = await pessoasServices.pegaUmRegistro({id})
            return res.status(200).json(umaPessoa);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criarPessoa(req,res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        }catch(error){
            return res.status(500).json(error.message);
        }
            
    }
    static async alterarPessoa(req,res){
        const{id}  = req.params
        const novosDados = req.body
        try{
            await pessoasServices.atualizaRegistro(novosDados, Number(id))
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
            
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagarPessoa(req,res){
        const{id} = req.params
        try{
            await pessoasServices.apagaRegistro(Number(id))
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async restauraPessoa(req,res){
        const {id} = req.params
        try{
            const registroRestaurado = await pessoasServices.restauraRegistro(Number(id))
            return res.status(200).json({mensagem:`id ${id} restaurado`})
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    
    
    static async cancelaPessoa(req,res){ 
        const {estudanteId} = req.params
        try{
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
      return res
        .status(200)
        .json({message: `matrículas ref. estudante ${estudanteId} canceladas`})        
        }catch (error) {
            return res.status(500).json(error.message)
          }
    }
    
    
    


    //-------------Matriculas---------------------------------------------
    /*
    static async getMatricula(req,res){
        const{estudanteId,matriculaId}  = req.params
        try{
            const  umaMatricula = await database.Matriculas.findOne({
                where:{
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }


    static async criarMatricula(req,res){
        const {estudanteId} = req.params
        const novaMatricula = {...req.body,estudante_id:Number(estudanteId)}
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        }catch(error){
            return res.status(500).json(error.message);
        }
            
    }

    static async alterarMatricula(req,res){
        const{estudanteId,matriculaId}  = req.params
        const novosDados = req.body
        try{
            await database.Matriculas.update(novosDados,{
                where:{
                    id:Number(matriculaId),
                    estudante_id:Number(estudanteId)
                }})
            const matriculaAtualizada = await database.Matriculas.findOne({
                where:{
                    id:Number(matriculaId)
                
                }})
            return res.status(200).json(matriculaAtualizada)
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagarMatricula(req,res){
        const{matriculaId}  = req.params
        try{
            await database.Matriculas.destroy({
                where:{
                id:Number(matriculaId)
            }})
            return res.status(200).json({mensagem:`id ${matriculaId} deletado`})
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          await database.Matriculas.restore({
            where: { 
              id: Number(matriculaId), 
              estudante_id: Number(estudanteId)
            } 
          })
          return res.status(200).json({ mensagem: `id ${matriculaId} restaurado`})
        } catch (error) {
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


static async pegaMatriculasPorTurma(req,res){
    const {turmaId}=req.params
    try{
     const todasAsMatriculas = await database.Matriculas.findAndCountAll({
         where:{
             turma_id:Number(turmaId),
             status:'confirmado'
         },
         limit:20,
         order:[['estudante_id','DESC']]
     })   
     return res.status(200).json(todasAsMatriculas)
    }catch (error) {
        return res.status(500).json(error.message)
      }
}

*/










}

module.exports = PessoaController