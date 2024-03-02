// const { Pool } = require('mysql2');

// const pool = new Pool({
//   user: "laksh",
//   host: "127.0.0.1",
//   database: "DockerMysql",
//   password: "laksh@123",
//   port: 3309,
// });

// export default {
//   query: async (text, params) => {
//     try {
//       const res = await pool.query(text, params);
//       return res;
//     } catch (err) {
//       console.error('Query Error', err);
//       throw err; 
//     }
//   },
// };