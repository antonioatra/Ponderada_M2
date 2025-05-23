const poll = require('../config/database')

exports.criarTaskPrioridade = async(req, res) => {
    const {task_id, priority_id} = req.body;

    const query = "INSERT INTO task_priority(task_id, priority_id) VALUES($1, $2) RETURNING *";

    try {
        const result = await pool.query(query, [task_id, priority_id]);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.editarTaskPrioridade = async(req, res) => {
    const {task_id} = req.params
    const {priority_id} = req.body;

    const query = "UPDATE task_priority SET priority_id = $1 WHERE task_id = $2 RETURNING *";

    try {
        const result = await pool.query(query, [priority_id, task_id]);

        res.status(200).json(result.rows[0]);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
};

exports.excluirTaskPrioridade = async(req,res) => {
    const {task_id} = req.params;

    const query = "DELETE FROM task_priority WHERE task_id = $1";

    try {
        const result = await pool.query(query, [task_id]);

        if(result.rowCount === 0)
        {
            return res.status(404).json({message: "Prioridade não encontrada"})
        }
        res.status(200).json({message: "Prioridade excuida"})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.listarTasksPorPrioridade = async(req, res) => {
    const query = `
    SELECT t.*, p.label AS priority_label
    FROM tasks t
    JOIN task_priority tp ON t.id = tp.task_id
    JOIN priorities p ON tp.priority_id = p.id
    ORDER BY 
        CASE 
            WHEN p.label = 'ALTA' THEN 1
            WHEN p.label = 'MEDIA' THEN 2
            WHEN p.label = 'BAIXA' THEN 3
        END;
    `;
    
    try {
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
