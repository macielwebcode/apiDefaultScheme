const HomeModel = require('../models/HomeModel');
const MenuModel = require('../models/MenuModel');

/* HomeModel.create({
    titulo: 'titulo de teste numero dois',
    descricao: 'descricao de teste numero dois'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e)) */

/* MenuModel.create({
    link: '<a href="/home"></a>',
    linklabel: 'Página Inicial'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))
 */
exports.homePage = (req, res) => {
    
    res.render('index', {
        titulo: 'titulo da pagina',
        numeros: [0, 1, 3, 4, 5]
    });
    return;
}

exports.postForm = (req, res) => {
    res.send(`new rota de post`);
    return;
}