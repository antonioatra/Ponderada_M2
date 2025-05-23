const fs = require('fs');
const path = require('path');

const pool = require("../config/database");

const runSQLScript = async () => {
  const filePath = path.join(__dirname, 'init.sql');
  const sql = fs.readFileSync(filePath, 'utf8');

  try {
    await pool.query(sql);
    console.log('Script SQL executado com sucesso!');
  } catch (err) {
    console.error('Erro ao executar o script SQL:', err);
  } finally {
    await pool.end();
  }
};

runSQLScript();
