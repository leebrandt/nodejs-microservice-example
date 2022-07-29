const { Pool } = require('pg')

const controllers = {
  getAll: async (req,res) => {
    const pool = new Pool({
      connectionString: process.env.DB_DSN,
    });
    const response = await pool.query('SELECT * FROM products')
    await pool.end();
    if(response){
      res.status(200).json(response.rows)
    }
    
  },

  getById: async (req,res) => {
    const pool = new Pool({
      connectionString: process.env.DB_DSN,
    });
    const response = await pool.query('SELECT * FROM products WHERE id = ' + req.params.id)
    await pool.end();
    if(response.rows){
      res.status(200).json(response.rows[0])
    }
  }
}

module.exports = controllers;
