const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

//mongoose.connect('mongodb://127.0.0.1:27017/bieapi', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://user:user@cluster0-uvjzi.mongodb.net/data?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./src/models")

const Pessoa = mongoose.model('Pessoa');

app.get("/", (req, res) => {
    Pessoa.create({
        nome: "Gabriel Bragion",
        email: "gcbragion@gmail.com",
        senha: "321123",
        nascimento: "2002-10-22"
    })

    return res.send("Banco criado!!");
});

app.use('/api', require('./src/routes'))

app.listen(5656);