const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    senha: {
        type: String,
        required: true,
    },
    nascimento: {
        type: Date,
    },
    criadoEm: {
        type: Date,
        default: Date.now,
    }
});
PessoaSchema.plugin(mongoosePaginate);

mongoose.model('Pessoa', PessoaSchema);