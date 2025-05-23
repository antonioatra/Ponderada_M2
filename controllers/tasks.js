const pool = require('../config/database');

exports.criarTasks = async(req, res) => {

    const {user_id, title, description, status} = req.body;
    const query = "INSERT INTO tasks (user_id, title, description, status) VALUES ($1,$2,$3,$4) RETURNING *";

    try {
    const result = await pool.query(query, [user_id, title, description, status]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarTasks = async(req, res) => {
    const {id} = req.params;
    const {title, description, status} = req.body;

    const query = "UPDATE tasks SET title=$1, description=$2, status=$3 WHERE id = $4 RETURNING *";

    try {
    const result = await pool.query(query, [title, description, status, id]);

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Task não encontrada" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirTasks = async(req, res) => {
    const {id} = req.params;
    const query = "DELETE FROM tasks WHERE id = $1";

    try {
    const result = await pool.query(query, [id]);
    if (result.rowCount === 0) {
        return res.status(404).json({ message: "Task não encontrada" }); 
    }
     res.status(200).json({ message: "Task excluída com sucesso" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listarTasks = async(req,res) => {
    const {user_id} = req.params;
    const query = "SELECT * FROM tasks WHERE user_id = $1";

    try {
        const result = await pool.query(query, [user_id]);
        if(result.rows.length === 0)
        {
            res.status(404).json({message: "Este usuário não tem task"})
        }
        res.status(200).json(result.rows);  
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
};
