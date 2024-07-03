const express = require('express')
const route = express.Router();
const PaginaInicial = require('./src/controllers/HomeController')
const AboutController = require('./src/controllers/AboutController')




//rotas página inicial
route.get('/', PaginaInicial.homePage);
route.post('/', PaginaInicial.postForm)


//rota pagina institucional
route.get('/about', AboutController.aboutContentPage)
route.post('/about', AboutController.postAbout)

module.exports = route;