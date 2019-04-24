const express = require('express');

const funcionarios = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) =>{
    try{
        const user = await funcionarios.create(req.body);
        return res.send({ user });        

    }catch (err){
        return res.status(400).send({error: err});
    }
});

router.get('/',  async (req, res) =>{
   try{
        const user = await funcionarios.findAll();
        return res.send({ user });
   }catch(err){
       return res.status(400).send({error: "Erro !!!!"})
   }

});

router.get('/:id',  async (req, res) =>{
    
        await funcionarios.findOne({
            where: {
               id: req.params.id
            }
        }).then(user =>{
            if(user){
                res.json(user)                
            }else { 
                res.send("Não existe!")
            }
        }).catch(err =>{
            res.send('erro: '+ err)
        }) 

});

router.put('/:id',  async (req, res) =>{
    try{
       // const { nome, idade, cargo } = req.body;

        const user = await funcionarios.update( 
            { nome: req.body.nome, idade: req.body.idade, cargo: req.body.cargo },
            { where: { id: req.params.id } }
        )
      
        return res.send({ user });
    }catch(err){
        return res.status(400).send({error: err});
    }

});

router.delete('/:id',  async (req, res) =>{
    await funcionarios.destroy({
        where: {
            id: req.params.id
         }
    }).then(() =>{
               res.json( {status: "Funcionario deletado"} )                
       
    }).catch(err =>{
        res.send('erro: '+ err)
    }) 

});

module.exports = app => app.use('/func' , router);
