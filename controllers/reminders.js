const pool = require('../config/database')

exports.criarLembrete = async(req, res) => {
    const {task_id, remind_at, sent} = req.body;

    const query = "INSERT INTO reminders(task_id, remind_at, sent) VALUES($1, $2, $3) RETURNING *";

    try {
        const result = await pool.query(query, [task_id, remind_at, sent]);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.editarLembrete = async(req,res) => {
    const { remind_at } = req.body;
    const {id} = req.params;

    const query = "UPDATE reminders SET remind_at = $1 WHERE id = $2 RETURNING *";

    try {
        const result = await pool.query(query, [remind_at, id])
        res.status(200).json(result.rows[0])
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.excluirLembrete = async(req, res) => {
    const {id} = req.params;

    const query = "DELETE FROM reminders WHERE id = $1";

    try {
        const result = await pool.query(query, [id])

        if(result.rowCount === 0) {
            return res.status(404).json({message: "Lembrete não encontrado"})
        }
        res.status(200).json({message: "Lembrete excluído"})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.listarLembretes = async(req, res) => {
    const {task_id} = req.params;

    const query = "SELECT * FROM reminders WHERE task_id = $1";

    try {
        const result = await pool.query(query, [task_id]);

        res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};