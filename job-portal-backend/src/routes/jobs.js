const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const q = (req.query.search || '').trim().toLowerCase();
  try {
    if (!q) {
      const r = await db.query(
        `SELECT id,title,description,location,salary,type,status,created_at
         FROM jobs WHERE status='approved' ORDER BY created_at DESC LIMIT 20`
      );
      return res.json(r.rows);
    }
    const r = await db.query(
      `SELECT id,title,description,location,salary,type,status,created_at
       FROM jobs
       WHERE status='approved'
         AND (LOWER(title) LIKE $1 OR LOWER(description) LIKE $1 OR LOWER(location) LIKE $1)
       ORDER BY created_at DESC LIMIT 50`,
      [`%${q}%`]
    );
    res.json(r.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
