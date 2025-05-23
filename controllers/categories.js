const pool = require('../config/database');

exports.listarCategorias = async (req, res) => {

  const query = 'SELECT * FROM categories';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
