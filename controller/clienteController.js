const Cliente = require('../model/clienteModel');

exports.listar = async (req, res) => {
  try {
    const clientes = await Cliente.listarTodos();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criar = async (req, res) => {
  const { nome, cpf, dn, contato, email, endereco, bairro, cidade, estado } = req.body;
  try {
    await Cliente.criar(nome, cpf, dn, contato, email, endereco, bairro, cidade, estado);
    res.status(201).json({ message: 'Cliente criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.buscarPorId(id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, cpf, dn, contato, email, endereco, bairro, cidade, estado } = req.body;
  try {
    await Cliente.atualizar(id, nome, cpf, dn, contato, email, endereco, bairro, cidade, estado);
    res.json({ message: 'Cliente atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await Cliente.deletar(id);
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};