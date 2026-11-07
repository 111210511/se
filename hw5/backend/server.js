const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL
    )
`).catch(err => console.error('資料庫初始化錯誤:', err));

app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM messages ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/data', async (req, res) => {
    try {
        const { content } = req.body;
        await pool.query('INSERT INTO messages (content) VALUES ($1)', [content]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('後端伺服器已啟動於 port 3000');
});
