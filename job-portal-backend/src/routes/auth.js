const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

router.post(
  '/register',
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('role').isIn(['seeker','employer','admin']),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password, role } = req.body;
    try {
      const hash = await bcrypt.hash(password, 10);
      const r = await db.query(
        `INSERT INTO users (name,email,password_hash,role) VALUES ($1,$2,$3,$4)
         RETURNING id,name,email,role`,
        [name, email, hash, role]
      );
      return res.json(r.rows[0]);
    } catch (e) {
      if (e.code === '23505') return res.status(400).json({ error: 'email already exists' });
      return res.status(500).json({ error: 'server error' });
    }
  }
);

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'missing' });

  try {
    const r = await db.query(`SELECT * FROM users WHERE email=$1`, [email]);
    if (r.rowCount === 0) return res.status(401).json({ error: 'invalid credentials' });

    const user = r.rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'invalid credentials' });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token });
  } catch {
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
