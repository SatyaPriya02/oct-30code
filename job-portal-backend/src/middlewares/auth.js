const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const h = req.headers.authorization;
  if (!h) return res.status(401).json({ error: 'no token' });
  const token = h.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ error: 'invalid token' });
  }
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).end();
    if (req.user.role !== role) return res.status(403).json({ error: 'forbidden' });
    next();
  };
}

module.exports = { authenticateJWT, authorizeRole };
