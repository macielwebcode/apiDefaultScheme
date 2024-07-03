const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    link: { type: String, required: true },
    linklabel:  String
});

const MenuModel = mongoose.model('Menu', MenuSchema);

module.exports = MenuModel;