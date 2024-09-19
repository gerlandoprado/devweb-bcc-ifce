const db = require('../config/db');

class Cliente {
  static async criar(nome, cpf, dn, contato, email, endereco, bairro, cidade, estado) {

    if (!nome) {
        throw new Error("O campo nome é obrigatório.");
    } else {
        const clienteExistente = await db.prepare('SELECT * FROM tbCliente WHERE nome_completo = ?').get(nome);

        if (clienteExistente) {
            throw new Error("Já existe um cliente com o mesmo nome.");
        } else {
            const insertCliente = db.prepare('INSERT INTO tbCliente (nome_completo, cpf, dn, contato, email) VALUES (?, ?, ?, ?, ?)');
            const info = await insertCliente.run(nome, cpf, dn, contato, email);
            const id_cliente = info.lastInsertRowid;

            const insertClienteEndereco = db.prepare('INSERT INTO tbClienteEndereco (id_cliente, endereco, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?)');
            await insertClienteEndereco.run(id_cliente, endereco, bairro, cidade, estado);
        }
    }

  }

  static async listarTodos() {
    const query = 'SELECT * FROM tbCliente c JOIN tbClienteEndereco ce ON c.id = ce.id_cliente';
    return db.prepare(query).all();
  }

  static async buscarPorId(id) {
    const query = 'SELECT * FROM tbCliente c JOIN tbClienteEndereco ce ON c.id = ce.id_cliente WHERE c.id = ?';
    return db.prepare(query).get(id);
  }

  static async atualizar(id, nome, cpf, dn, contato, email, endereco, bairro, cidade, estado) {
    const update1 = db.prepare('UPDATE tbCliente SET nome_completo = ?, cpf = ?, dn = ?, contato = ?, email = ? WHERE id = ?');
    await update1.run(nome, cpf, dn, contato, email, id);

    const update2 = db.prepare('UPDATE tbClienteEndereco SET endereco = ?, bairro = ?, cidade = ?, estado = ? WHERE id_cliente = ?');
    await update2.run(endereco, bairro, cidade, estado, id);
}

  static async deletar(id) {
    const deleteClienteEndereco = db.prepare('DELETE FROM tbClienteEndereco WHERE id_cliente = ?');
    await deleteClienteEndereco.run(id);

    const deleteCliente = db.prepare('DELETE FROM tbCliente WHERE id = ?');
    await deleteCliente.run(id);

  }
}

module.exports = Cliente;