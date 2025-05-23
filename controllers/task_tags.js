const pool = require('../config/database');

exports.criarTaskTag = async (req, res) => {
    const {task_id, tag_id} = req.body;

    const query = "INSERT INTO task_tags (task_id, tag_id) VALUES ($1, $2) RETURNING *"

    try {
        const result = await pool.query(query, [task_id, tag_id])

        res.status(201).json(result.rows[0])
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.editarTaskTag = async (req, res) => {
    const {tag_id} = req.body;

    const query = "UPDATE task_tags SET tag_id = $1 RETURNING *"

    try {
        const result = await pool.query(query, [tag_id])

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.excluirTaskTag = async(req, res) => {
    const {task_id} = req.body;

    const query = "DELETE FROM task_tags WHERE task_id = $1"

    try {
        const result = await pool.query(query, [task_id])

        res.status(200).json({message: "Tag excluída"})
    } catch (err) {
        res.status(500).json({erro: err.message})
    }
}