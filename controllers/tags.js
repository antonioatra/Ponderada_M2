const pool = require('../config/database')

exports.criarTag = async(req, res) => {
    const {name} = req.body;

    const query = "INSERT INTO tags (name) VALUES ($1) RETURNING *"

    try {
        const result = await pool.query(query, [name])

        res.status(201).json(result.rows[0])
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.editarTag = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const query = "UPDATE tags SET name=$1 WHERE id = $2 RETURNING *";

    try {
        const result = await pool.query(query, [name, id])

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Tag não encontrada" });
        }

        res.status(200).json(result.rows[0])
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.excluirTag = async(req, res) => {
    const {id} = req.params;

    const query = "DELETE FROM tags WHERE id = $1 RETURNING *";

    try {
        const result = await pool.query(query, [id])

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Tag não encontrada" });
        }

        res.status(200).json(result.rows[0])
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.listarTags = async(req, res) => {
    const query = "SELECT * FROM tags";

    try {
        const result = await pool.query(query)

        res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};