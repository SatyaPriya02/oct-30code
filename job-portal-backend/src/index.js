// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');

// // const authRoutes = require('./routes/auth');
// // const employerRoutes = require('./routes/employer');
// // const adminRoutes = require('./routes/admin');
// // const jobsRoutes = require('./routes/jobs');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // app.get('/health', (req, res) => res.json({ ok: true }));

// // app.use('/auth', authRoutes);
// // app.use('/employer', employerRoutes);
// // app.use('/admin', adminRoutes);
// // app.use('/jobs', jobsRoutes);

// // app.use((req, res) => res.status(404).json({ error: 'not found' }));

// // app.use((err, req, res, next) => {
// //   console.error(err);
// //   res.status(500).json({ error: 'server error' });
// // });

// // const port = process.env.PORT || 4000;
// // app.listen(port, () => console.log(`API on http://localhost:${port}`));






// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const db = require('./db'); // ✅ add this line

// const authRoutes = require('./routes/auth');
// const employerRoutes = require('./routes/employer');
// const adminRoutes = require('./routes/admin');
// const jobsRoutes = require('./routes/jobs');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Health check
// app.get('/health', (req, res) => res.json({ ok: true }));

// // ✅ Test DB connection route
// app.get('/test-db', async (req, res) => {
//   try {
//     const result = await db.query('SELECT NOW()');
//     res.json({ connected: true, time: result.rows[0].now });
//   } catch (err) {
//     console.error('DB connection error:', err);
//     res.status(500).json({ connected: false, error: err.message });
//   }
// });

// app.use('/auth', authRoutes);
// app.use('/employer', employerRoutes);
// app.use('/admin', adminRoutes);
// app.use('/jobs', jobsRoutes);

// app.use((req, res) => res.status(404).json({ error: 'not found' }));

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: 'server error' });
// });

// const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`));





// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const db = require('./db');         // <- add this

// const authRoutes = require('./routes/auth');
// const employerRoutes = require('./routes/employer');
// const adminRoutes = require('./routes/admin');
// const jobsRoutes = require('./routes/jobs');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/health', (req, res) => res.json({ ok: true }));

// // DB test route — visit /test-db
// app.get('/test-db', async (req, res) => {
//   try {
//     const { rows } = await db.query('SELECT NOW()');
//     res.json({ connected: true, time: rows[0].now });
//   } catch (err) {
//     console.error('DB connection error:', err);
//     res.status(500).json({ connected: false, error: err.message });
//   }
// });

// app.use('/auth', authRoutes);
// app.use('/employer', employerRoutes);
// app.use('/admin', adminRoutes);
// app.use('/jobs', jobsRoutes);

// app.use((req, res) => res.status(404).json({ error: 'not found' }));

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: 'server error' });
// });

// const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`API on http://localhost:${port}`));




// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db'); // Database connection

// Route imports
const authRoutes = require('./routes/auth');
const employerRoutes = require('./routes/employer');
const employeeRoutes = require('./routes/employee'); // ✅ newly added
const adminRoutes = require('./routes/admin');
const jobsRoutes = require('./routes/jobs');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// ✅ Database test route
app.get('/test-db', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT NOW()');
    res.json({ connected: true, time: rows[0].now });
  } catch (err) {
    console.error('DB connection error:', err);
    res.status(500).json({ connected: false, error: err.message });
  }
});

// ✅ API routes
app.use('/auth', authRoutes);
app.use('/employer', employerRoutes);
app.use('/employee', employeeRoutes); // ✅ added route
app.use('/admin', adminRoutes);
app.use('/jobs', jobsRoutes);

// ✅ 404 Handler
app.use((req, res) => res.status(404).json({ error: 'not found' }));

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'server error' });
});

// ✅ Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`));
