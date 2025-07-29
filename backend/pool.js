import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "travelease_sample",
});

export default pool;
