const pool = require ('../config/database');

exports.listarPrioridades = async(req, res) => {
    const query = "SELECT * FROM priorities ";

    try {
        const result = await pool.query(query);

        res.status(200).json(result.rows);
    } catch (err){
        res.status(500).json({ error: err.message})
    }
};