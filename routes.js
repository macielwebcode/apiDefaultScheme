const express = require('express')
const route = express.Router();
const PaginaInicial = require('./src/controllers/HomeController')
const LoginController = require('./src/controllers/LoginController')
const AboutController = require('./src/controllers/AboutController')
const ContatoController = require('./src/controllers/ContatoController')

const { loginRequired } = require('./src/middlewares/middleware')


//rotas página inicial
route.get('/', PaginaInicial.index);
route.post('/', PaginaInicial.postForm)

//rotas login
route.get('/login/index', LoginController.index)
route.post('/login/create', LoginController.create)
route.post('/login/login', LoginController.login)
route.get('/login/logout', LoginController.logout)


// contato
route.get('/contato/index', ContatoController.index)
route.post('/contato/create', ContatoController.create)
route.get('/contato/index/:id', ContatoController.editIndex)
route.post('/contato/edit/:id', ContatoController.edit)
route.delete('/contato/delete/:id', ContatoController.delete)


//rota pagina institucional
route.get('/about', AboutController.aboutContentPage)
route.post('/about', AboutController.postAbout)

module.exports = route;