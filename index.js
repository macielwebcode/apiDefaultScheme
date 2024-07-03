require('dotenv').config();

const express = require('express')
const app = express();
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf');
const { globalMiddleware, checkCsrfError, checkCsrfToken } = require('./src/middlewares/middleware');

app.use(helmet())

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.resolve(__dirname, 'public')))

const moongose = require('mongoose');

moongose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto conectado');
    })
    .catch(e => console.log(e))

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');





const sessionOptions = session({
    secret: 'ba9343589g@#$',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(csrf());

// MIDDLEWARES
// app.use(globalMiddleware)
// app.use(checkCsrfError)
// app.use(checkCsrfToken)

app.use(routes)

app.on('conexão pronta', () => {
    console.log('conexao com mongo pronta')
})

app.listen(5000, () =>{
    console.log('server rodando na porta 5000')
    console.log('Acessar localhost:5000')
});

