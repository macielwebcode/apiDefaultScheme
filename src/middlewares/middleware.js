exports = (req, res, next) => {
    res.locals.varLocal = 'valor variavel local'
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return red.render('404')
    }
}

exports.checkCsrfToken = (req, res, next) => {
    res.locals.crsf= req.crsfToken();
    next();
}