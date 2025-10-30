// const express = require('express');
// const router = express.Router();
// const db = require('../db');
// const { authenticateJWT, authorizeRole } = require('../middlewares/auth');
// const { body, validationResult } = require('express-validator');

// router.use(authenticateJWT, authorizeRole('employer'));

// router.get('/jobs', async (req, res) => {
//   const r = await db.query(
//     `SELECT id, title, description, location, salary, type, status, created_at
//      FROM jobs WHERE employer_id=$1 ORDER BY created_at DESC`,
//     [req.user.id]
//   );
//   res.json(r.rows);
// });

// router.post(
//   '/jobs',
//   body('title').notEmpty(),
//   body('description').notEmpty(),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

//     const { title, description, location, salary, type } = req.body;
//     const r = await db.query(
//       `INSERT INTO jobs (employer_id,title,description,location,salary,type,status)
//        VALUES ($1,$2,$3,$4,$5,$6,'pending') RETURNING *`,
//       [req.user.id, title, description, location || null, salary || null, type || null]
//     );
//     res.status(201).json(r.rows[0]);
//   }
// );

// module.exports = router;





const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

// Signup employer
router.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password, company_name } = req.body;
    try {
      // hash password
      const hashed = await bcrypt.hash(password, 10);

      const result = await db.query(
        `INSERT INTO employers (name, email, password, company_name)
         VALUES ($1, $2, $3, $4) RETURNING id, name, email, company_name, created_at`,
        [name, email, hashed, company_name || null]
      );

      const employer = result.rows[0];
      res.status(201).json({ employer });
    } catch (err) {
      if (err.code === '23505') return res.status(400).json({ error: 'Email already exists' });
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Signin employer
router.post(
  '/signin',
  body('email').isEmail(),
  body('password').notEmpty(),
  async (req, res) => {
    const { email, password } = req.body;
    try {
      const { rows } = await db.query('SELECT id, name, email, password FROM employers WHERE email = $1', [email]);
      if (!rows.length) return res.status(401).json({ error: 'Invalid credentials' });

      const user = rows[0];
      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

      // sign JWT
      const token = jwt.sign({ id: user.id, role: 'employer', email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, employer: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;
