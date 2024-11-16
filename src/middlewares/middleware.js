exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('erros')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user;
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404')
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken= req.csrfToken();
    next();
}

//middleware para verificar se existe user na session para n retornar 
//pagina de contato sem logar
exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('errors', "faça o login")
        req.session.save(() => res.redirect('/'))
        return;
    }
    next()
}


