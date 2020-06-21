const mongoose = require('mongoose');

const Pessoa = mongoose.model('Pessoa')

module.exports = {
    async index (req, res) {
        const { page = 1 } = req.query
        const pessoas = await Pessoa.paginate({}, { page, limit: 10});

        return res.json(pessoas);
    },
    async store (req, res) {
        const pessoa = await Pessoa.create(req.body);

        return res.json(pessoa);
    },
    async destroy (req, res) {
        await Pessoa.findByIdAndRemove(req.params.id);

        return res.send();
    }
};