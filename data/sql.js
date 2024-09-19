const sqlite3 = require('better-sqlite3');
const db = new sqlite3('data/database.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS tbCliente (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cadastrado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        nome_completo VARCHAR(100),
        cpf VARCHAR(11),
        dn VARCHAR(11),
        contato VARCHAR(15),
        email VARCHAR(100)
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS tbClienteEndereco (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_cliente INTEGER,
        endereco VARCHAR(100),
        bairro VARCHAR(100),
        cidade VARCHAR(100),
        estado VARCHAR(2),
        FOREIGN KEY(id) REFERENCES tbCliente(id)
    )
`);