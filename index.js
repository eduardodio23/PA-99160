const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('aprendendo_api2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// --- MODELS ---

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
    },
});

const Funcionario = sequelize.define('Funcionarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Produto = sequelize.define('Produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
    },
    quantidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});



const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;



app.get('/Clientes', async (req, res) => {
    try {
        const todosOsClientes = await Cliente.findAll({ 
            attributes: ['nome', 'cpf', 'email', 'telefone'] 
        });

        res.json(todosOsClientes);
    } catch (erro) {
        console.error("Erro real que aconteceu:", erro); 
        res.status(500).json({ erro: 'Erro ao buscar clientes' });
    }
});

app.get('/Funcionarios', async (req, res) => {
    try {
        const todosOsFuncionarios = await Funcionario.findAll({
            attributes: ['nome', 'telefone', 'email', 'cargo', 'setor']
        });

        res.json(todosOsFuncionarios);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar funcionarios' });
    }
});

app.get('/Produtos', async (req, res) => {
    try {
        const todosOsProdutos = await Produto.findAll({
            attributes: ['nome', 'lote', 'quantidade', 'preco']
        });

        res.json(todosOsProdutos);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar produtos' });
    }
});



app.post('/Clientes', async (req, res) => {
    try {
        const { nome, cpf, email, telefone } = req.body;
        const novoCliente = await Cliente.create({ nome, cpf, email, telefone });

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso.',
            Cliente: novoCliente
        });
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar cliente. Verificar as informações.',
            detalhe: erro.message
        });
    }
});

app.post('/Funcionarios', async (req, res) => {
    try {
        const { nome, telefone, email, cargo, setor } = req.body;
        const novoFuncionario = await Funcionario.create({ nome, telefone, email, cargo, setor });

        res.status(201).json({
            mensagem: 'Funcionario cadastrado com sucesso.',
            Funcionario: novoFuncionario 
        });
    } catch (erro) {
        console.error('Erro ao cadastrar funcionario:', erro.message);
        res.status(400).json({
            mensagem: 'Erro ao cadastrar funcionario. Verificar as informações.',
            detalhe: erro.message 
        });
    }
});

app.post('/Produtos', async (req, res) => {
    try {
        const { nome, lote, quantidade, preco } = req.body;
        const novoProduto = await Produto.create({ nome, lote, quantidade, preco });

        res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso.',
            Produto: novoProduto 
        });
    } catch (erro) {
        res.status(400).json({
            mensagem: 'Erro ao cadastrar produto. Verificar as informações.',
            detalhe: erro.message
        });
    }
});



sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
        console.log(' Banco de dados sincronizado 😈 ');
    });
}).catch((erro) => {
    console.error('💕 Erro ao conectar ou sincronizar com o banco de dados', erro);
});