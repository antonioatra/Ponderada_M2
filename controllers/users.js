const pool = require('../config/database');

exports.criarUsuario = async (req, res) => {
  const { name, cpf, birthdate } = req.body;
  const query = 'INSERT INTO users (name, cpf, birthdate) VALUES ($1, $2, $3) RETURNING *';

  try {
    const result = await pool.query(query, [name, cpf, birthdate]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarUsuario = async (req,res) => {
  const {id} = req.params;
  const {name, cpf, birthdate} = req.body;
  const query = "UPDATE users SET name=$1, cpf=$2, birthdate=$3 WHERE id = $4 RETURNING *"
  const values = [name, cpf, birthdate, id]

  try {
    const result = await pool.query(query, values);
      if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }
    res.status(200).json(result.rows[0]);
    } catch (err) {
    res.status(500).json({ error: err.message });
    } 
};

exports.deletarUsuario = async (req,res) => {
  const { id } = req.params;

  const query = "DELETE FROM users WHERE id = $1 RETURNING *";
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({message: "Usuario não encontrado"})
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message})
  }
};

exports.listarUsuarios = async (req, res) => {
  const query = 'SELECT * FROM users';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


