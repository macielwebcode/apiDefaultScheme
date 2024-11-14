const Login = require('../models/LoginModel')

exports.index = (req, res) => {   
    if(req.session.user) return res.render('dash')
    return res.render('login');
}

exports.create = async (req, res) => {   
    try {
        const login = new Login(req.body)
        console.log('entrou no create', req.body)
        await login.created()

        if(login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(function(){
                return res.redirect('back')
            })
            return;
        }

        req.flash('success', 'Seu Usuário foi criado com sucesso');
        req.session.save(function(){
            return res.redirect('back')
        })

        
    } catch (e) {
        console.log(e)
        return res.render('404')
    }
    
}


exports.login = async (req, res) => {   
    try {
        const login = new Login(req.body)
       
        await login.logar()

        if(login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(function(){
                return res.redirect('back')
            })
            return;
        }

       
        req.flash('success', 'Login autenticado');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('back')
        })

        
    } catch (e) {
        console.log(e)
        return res.render('404')
    }
    
}

exports.logout = function(req, res){
    req.session.destroy()
    res.redirect('/')
}