const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('atividade_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})

const Cliente = sequelize.define('Clientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})


const Moto = sequelize.define('Motos', {
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        unique: true
    },

    cilindrada: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ano_fabricacao: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const Carro = sequelize.define('Carros', {
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        unique: true
    },

    cor: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ano_fabricacao: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.get('/clientes', async (req, res) => {
    try {
        const todosOsClientes = await Cliente.findAll({ attributes: ['nome', 'cpf', 'email', 'telefone', 'endereco'] })

        res.json(todosOsClientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao clientes ' })
    }
})

app.get('/motos', async (req, res) => {
    try {
        const todosAsMotos = await Moto.findAll({
            attributes: ['modelo', 'placa', 'cilindrada', 'ano_fabricacao', 'marca']
        })

        res.json(todosAsMotos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar motos' })
    }
})

app.get('/carros', async (req, res) => {
    try {
        const todosOsCarros = await Carro.findAll({
            attributes: ['modelo', 'placa', 'cor', 'ano_fabricacao', 'marca']
        });

        res.json(todosOsCarros);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar carros' });
    }
});

app.post('/clientes', async (req, res) => {
    try {
        const { nome, cpf, email, telefone, endereco } = req.body
        const novoCliente = await Cliente.create({ nome, cpf, email, telefone, endereco }
        )

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso.',
            Cliente: novoCliente
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar cliente. Verificar as informações'
        })
    }
})

app.post('/motos', async (req, res) => {
    try {
        const { modelo, placa, cilindrada, ano_fabricacao, marca } = req.body
        const novaMoto = await Moto.create({ modelo, placa, cilindrada, ano_fabricacao, marca })

        res.status(201).json({
            mensagem: 'Moto cadastrada com sucesso.',
            Moto: novaMoto
        })
    } catch (erro) {
        console.error('Erro ao cadastrar moto:', erro.message)
        res.status(400).json({
            mensagem: 'Erro ao cadastrar moto. Verificar as informações.',
            detalhe: erro.message // Agora ele vai te mostrar o motivo do erro no Insomnia!
        })
    }
})

app.post('/carros', async (req, res) => {
    try {
        const { modelo, placa, cor, ano_fabricacao, marca } = req.body
        const novoCarro = await Carro.create({ modelo, placa, cor, ano_fabricacao, marca }
        )

        res.status(201).json({
            mensagem: 'Carro cadastrado com sucesso.',
            Carro: novoCarro
        })
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar carro. Verificar as informações'
        })
    }
})

//INICIAR API E CONECTAR  AO BANCO DE DADOS.
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀Servidor rodando em http://localhost:${port}`) // Tirei o 's' do https, o localhost é http normal!
        console.log(' Banco de dados sincronizado😈 ')
    })
}).catch((erro) => {
    console.error('💕Erro ao conectar ou sincronizar com o banco de dados', erro)
})