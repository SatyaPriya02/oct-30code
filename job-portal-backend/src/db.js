// const { Pool } = require('pg');
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// module.exports = { query: (text, params) => pool.query(text, params) };



// const { Pool } = require('pg');

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   // Uncomment this line if connecting to a cloud PostgreSQL server (like Render, Supabase, etc.)
//   // ssl: { rejectUnauthorized: false },
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };



// // db.js
// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   // ssl: { rejectUnauthorized: false }, // uncomment for some cloud DBs
// });
// module.exports = { query: (text, params) => pool.query(text, params) };




const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Uncomment below only if using cloud DB (Render, Supabase, etc.)
  // ssl: { rejectUnauthorized: false },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
