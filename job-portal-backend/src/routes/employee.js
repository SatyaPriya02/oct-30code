const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

// Signup employee
router.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password, resume_url } = req.body;
    try {
      const hashed = await bcrypt.hash(password, 10);
      const result = await db.query(
        `INSERT INTO employees (name, email, password, resume_url)
         VALUES ($1, $2, $3, $4) RETURNING id, name, email, resume_url, created_at`,
        [name, email, hashed, resume_url || null]
      );
      res.status(201).json({ employee: result.rows[0] });
    } catch (err) {
      if (err.code === '23505') return res.status(400).json({ error: 'Email already exists' });
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Signin employee
router.post(
  '/signin',
  body('email').isEmail(),
  body('password').notEmpty(),
  async (req, res) => {
    const { email, password } = req.body;
    try {
      const { rows } = await db.query('SELECT id, name, email, password FROM employees WHERE email = $1', [email]);
      if (!rows.length) return res.status(401).json({ error: 'Invalid credentials' });

      const user = rows[0];
      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, role: 'employee', email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, employee: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;
