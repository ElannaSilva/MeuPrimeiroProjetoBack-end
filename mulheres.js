const express = require ('express')  //aqui estou inciando o express
const router = express.Router() //aqui estou config a primeira parte da rota
const cors = require('cors') //aqui estou tazendo o pacote cors que permite consumir essa API no front-end
const conectaBancoDeDados = require('./bancoDeDados') //aqui estou ligando o banco de dados ao arquivo bancoDedados
conectaBancoDeDados() //aqui estou chamando a função que conecta o banco de dados
const Mulher = require('./mulherModel')
const app = express() //aqui estou iniciando o app
app.use(express.json())
app.use(cors())
const porta = 3333 //aqui estou criando a porta


//função criada pro GET
async function mostraMulheres(request, response) {
    try {
        const mulheresvindasdoBancoDeDados = await Mulher.find()

        response.json(mulheresvindasdoBancoDeDados)

    }catch (erro) {
        console.log(erro)

    }
    
}
//POST
async function criaMulher(request, response) {
     const novaMulher = new Mulher({
       
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
     })

     try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
     }catch (erro){
        console.log(erro)
     }
}

//PATCH
async function corrigeMulher(request, response) {
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    }catch(erro){
        console.log(erro)
    }
    
} 

//PORTA
function mostraPorta () {
    console.log ('Servidor criado e rodando porta ', porta)
}

//DELETE
async function deletaMulher(request, response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem:'Mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro)
    }

}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota POST /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta
app.use(router.patch('/mulheres/:id', corrigeMulher)) //config a rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //config a rota DELETE /mulheres