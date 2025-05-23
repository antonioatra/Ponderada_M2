const pool = require ("../config/database");

exports.criarComentario = async(req,res) => {
    const {task_id, user_id, content} = req.body;
    const query = "INSERT INTO comments(task_id, user_id, content) VALUES($1, $2, $3) RETURNING *";
    const values = [task_id, user_id, content];
    try {
        const result = await pool.query(query,values)
         res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editarComentario = async(req,res) => {
    const {id} = req.params;
    const {task_id, content} = req.body;

    const query = "UPDATE comments SET task_id = $1, content = $2 WHERE id = $3 RETURNING *";

    try {
        const result = await pool.query(query, [task_id, content, id]);

    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Comentario não encontrada" });
    }

    res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
  }
};

exports.excluirComentario = async(req,res) => {
    const {id} = req.params;

    const query = "DELETE FROM comments WHERE id = $1 RETURNING *";

    try {
        const result = await pool.query(query, [id]);

        if(result.rowCount === 0) {
            return res.status(404).json({ message: "Comentario não encontrado" });
        }
        res.status(200).json({ message: "Comentario excluído com sucesso" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listarComentariosTask = async(req,res) => {
    const {task_id} = req.params;
    
    const query = "SELECT * FROM comments WHERE task_id = $1";

    try {
        const result = await pool.query(query, [task_id]);

        if(result.rows.length === 0)
        {
            res.status(404).json({message: "Esta task não tem comentários"});
        }
        res.status(200).json(result.rows);
    } catch(err)
    {
        res.status(500).json({error: err.message});
    }
};