const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticateJWT, authorizeRole } = require('../middlewares/auth');

router.use(authenticateJWT, authorizeRole('admin'));

router.get('/jobs', async (req, res) => {
  const status = (req.query.status || 'pending').toLowerCase();
  const r = await db.query(
    `SELECT j.*, u.name AS employer_name
     FROM jobs j
     JOIN users u ON u.id = j.employer_id
     WHERE j.status = $1
     ORDER BY j.created_at ASC`,
    [status]
  );
  res.json(r.rows);
});

async function updateStatus(jobId, newStatus, adminId) {
  const jobR = await db.query(`SELECT status FROM jobs WHERE id=$1`, [jobId]);
  if (jobR.rowCount === 0) return null;
  const oldStatus = jobR.rows[0].status;

  const upd = await db.query(
    `UPDATE jobs SET status=$1, updated_at=now() WHERE id=$2 RETURNING *`,
    [newStatus, jobId]
  );
  await db.query(
    `INSERT INTO job_status_history (job_id, changed_by, old_status, new_status, comment)
     VALUES ($1,$2,$3,$4,$5)`,
    [jobId, adminId, oldStatus, newStatus, null]
  );
  return upd.rows[0];
}

router.post('/jobs/:id/approve', async (req, res) => {
  const id = Number(req.params.id);
  const job = await updateStatus(id, 'approved', req.user.id);
  if (!job) return res.status(404).json({ error: 'not found' });
  res.json(job);
});

router.post('/jobs/:id/reject', async (req, res) => {
  const id = Number(req.params.id);
  const job = await updateStatus(id, 'rejected', req.user.id);
  if (!job) return res.status(404).json({ error: 'not found' });
  res.json(job);
});

module.exports = router;
