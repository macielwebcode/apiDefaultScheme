const HomeModel = require('../models/HomeModel');
const MenuModel = require('../models/MenuModel');
const ContatoModel = require('../models/ContatoModel')

/*HomeModel.create({
    titulo: 'titulo de teste numero hoje novembro',
    descricao: 'descricao de teste numero novembro'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e)) */

// buscar dados
/*omeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e))*/

/* MenuModel.create({
    link: '<a href="/home"></a>',
    linklabel: 'Página Inicial'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))
 */
exports.index = async (req, res) => {
    // req.session.usuario [ { nome: 'babi', logado: true }]
    const contatos = await ContatoModel.getContatos()
    console.log('ver contatos', contatos)
    // res.render('index');
    res.render('index', { contatos });
    return;
}

exports.postForm = (req, res) => {
    res.send(`new rota de post`);
    return;
}