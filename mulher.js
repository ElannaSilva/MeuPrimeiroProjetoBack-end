const express = require ('express')
const router = express.Router()

const app = express ()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Elanna Silva',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQHru3QpUAabAg/profile-displayphoto-shrink_400_400/0/1652814954518?e=1686787200&v=beta&t=lUxNHVE6TQXwPOn-XNmtNui-qY2T6rLFlnEPdDuhRYw',
        minibio: 'Cozinheira por amor, futura desenvolvedora'
    })
}

function mostraPorta () {
    console.log ('Servidor criado e rodando porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)