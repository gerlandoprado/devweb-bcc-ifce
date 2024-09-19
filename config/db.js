const sqlite3 = require('better-sqlite3');
const db = new sqlite3('data/database.db');

module.exports = db;