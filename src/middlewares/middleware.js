module.exports = (req, res, next) => {
    res.locals.varLocal = 'valor variavel local'
    next()
}