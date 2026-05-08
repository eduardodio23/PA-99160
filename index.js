const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

//CONFIGURANDO CONEXÃO COM O BANCO DE DADOS.
const sequelize = new Sequelize('aprendendo_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// ORM - MAPEANDO CLASSE PARA A TABELA NO BANCO DE DADOS
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

// CONFIGURANDO SERVIDOR EXPRESS
const app = express()
app.use(cors()) //PERMITE O FRONT-END ACESSAR A API.
app.use(express.json()) //PERMITE O SERVIDOR ENTENDER JSON.

const port = 3000

// DEFININDO ROTAS.
// Rotas para buscar todos os clientes no banco de dados.
app.get('/clientes', async (req, res) => {
    const todosOsClientes = await Cliente.findAll()
    res.json(todosOsClientes)
})

// Rota para cadastrar um cliente e inserir no banco de dados
app.post('/clientes', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body
        const novoCliente = await Cliente.create({ nome, email, telefone })

        res.status(201).json({
            mensagem: 'Cliente cadastro com sucesso.',
            Cliente: novoCliente
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar cliente. Verificar se o email já existe'
        })
    }
})



const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lote: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})


app.get('/produtos', async (req, res) => {
    const todosOsProdutos = await Produto.findAll()
    res.json(todosOsProdutos)
})



// Rota para cadastrar um produto e inserir no banco de dados
app.post('/produtos', async (req, res) => {
    try {
        const { nome, quantidade, lote, preco } = req.body
        const novoProduto = await Produto.create({ nome, quantidade, lote, preco })

        res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso.',
            Produto: novoProduto
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar produto. Verificar as informações'
        })
    }
})

//INICIAR API E CONECTAR  AO BANCO DE DADOS.
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀Servidor rodando em https://localhost:${port}`)
        console.log(' Banco de dados sincronizado😈 ')
    })
}).catch((erro) => {
    console.error('💕Erro ao conectar ou sincronizar com o banco de dados', erro)
})



