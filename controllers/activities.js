const pool = require('../config/database');

exports.criarAtividades = async(req,res) => {
    const  {task_id, user_id, category_id, duration_hours, day_activ} = req.body;
    const query = "INSERT INTO activities (task_id, user_id, category_id, duration_hours, day_activ) VALUES($1,$2,$3,$4,$5) RETURNING *";
    const values = [task_id, user_id, category_id, duration_hours, day_activ];
    try {
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
         } catch (err) {
    res.status(500).json({ error: err.message });
    }
};
 
exports.editarAtividades = async(req,res) => {
    const {id} = req.params;
    const {task_id, category_id, duration_hours, day_activ} = req.body;
    const values = [task_id, category_id, duration_hours, day_activ, id];
    const query = "UPDATE activities SET task_id = $1, category_id = $2, duration_hours = $3, day_activ = $4 WHERE id = $5 RETURNING *";

    try {
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Atividade não encontrada" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

exports.deletarAtividades = async(req,res) => {
    const {id} = req.params;
    const query = "DELETE FROM activities WHERE id = $1 RETURNING *";

    try {
        const result = await pool.query(query, [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({message:"Atividade não encontrado"})
        } 
        res.status(200).json(result.rows[0]);
    } catch (err) {
    res.status(500).json({ error: err.message})
    }
};

exports.listarAtividades = async(req, res) => {
    const {task_id} = req.params;
    const query = "SELECT * FROM activities WHERE user_id = $1";

    try {
        const result = await pool.query(query, [task_id]);
        if (result.rows.length === 0)
        {
            return res.status(404).json({message:"Este usuário não tem atividades"})
        }
        res.status(200).json(result.rows);
    } catch (err) {
    res.status(500).json({ error: err.message})
    }
};
