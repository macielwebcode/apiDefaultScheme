const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now },
   
});

const ContatoModel =  mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = []
    this.contato = null
}

Contato.prototype.create =  async function(){
    this.validate();

    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.validate = function(){
    this.cleanUp()

    //validar e-mail
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.nome) this.errors.push('Nome é obrigatório')
    if(!this.body.email && !this.body.telefone) {
        this.errors.push('Inserir um contato: e-mail ou telefone')
    }
}



Contato.prototype.cleanUp = function(){
    for(const key in this.body){
       if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
       }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
        
    }

}



Contato.prototype.edit = async function(id){
 if(typeof id !== 'string') return;
 this.validate();
 if(this.errors.length > 0) return;
 this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
}


//Métodos estáticos (nao usa o this)
Contato.getId = async function(id){
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id)
    return contato
}

Contato.getContatos = async function(){
    const contatos = await ContatoModel.find()
    .sort({ createdAt: -1 })
    return contatos
}

Contato.delete = async function(id){
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({__id: id })
    return contato
}

module.exports = Contato;