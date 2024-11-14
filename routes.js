const express = require('express')
const route = express.Router();
const PaginaInicial = require('./src/controllers/HomeController')
const LoginController = require('./src/controllers/LoginController')
const AboutController = require('./src/controllers/AboutController')




//rotas página inicial
route.get('/', PaginaInicial.index);
route.post('/', PaginaInicial.postForm)

//rotas login
route.get('/login/index', LoginController.index)
route.post('/login/create', LoginController.create)
route.post('/login/login', LoginController.login)
route.get('/login/logout', LoginController.logout)


//rota pagina institucional
route.get('/about', AboutController.aboutContentPage)
route.post('/about', AboutController.postAbout)

module.exports = route;