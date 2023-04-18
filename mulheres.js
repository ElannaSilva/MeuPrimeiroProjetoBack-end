const express = require ('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
            nome: 'Elanna Silva',
            imagem: 'https://media.licdn.com/dms/image/C4E03AQHru3QpUAabAg/profile-displayphoto-shrink_400_400/0/1652814954518?e=1686787200&v=beta&t=lUxNHVE6TQXwPOn-XNmtNui-qY2T6rLFlnEPdDuhRYw',
            minibio: 'Cozinheira por amor, futura desenvolvedora'
        }, 
        {
            nome: 'Mulher 2',
            imagem: 'https://media.licdn.com/dms/image/C4E03AQHru3QpUAabAg/profile-displayphoto-shrink_400_400/0/1652814954518?e=1686787200&v=beta&t=lUxNHVE6TQXwPOn-XNmtNui-qY2T6rLFlnEPdDuhRYw',
            minibio: 'Bio 2'
        },
        {
            nome: 'Mulher 3',
            imagem: 'https://media.licdn.com/dms/image/C4E03AQHru3QpUAabAg/profile-displayphoto-shrink_400_400/0/1652814954518?e=1686787200&v=beta&t=lUxNHVE6TQXwPOn-XNmtNui-qY2T6rLFlnEPdDuhRYw',
            minibio: 'Bio 3'
        }
    
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta () {
    console.log ('Servidor criado e rodando porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)