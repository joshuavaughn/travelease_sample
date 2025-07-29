import pool from "../../pool.js";

async function createUsersTable() {
  const query = `
  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    user_name TEXT NOT NULL,
    first_name TEXT NOT NULL, 
    last_name TEXT NOT NULL, 
    email TEXT, 
    contact_no INT, 
    password TEXT NOT NULL
  );`;

  try {
    const result = await pool.query(query);
    console.log("created user table");
  } catch (e) {
    console.log("error user table: ", e);
  }
}

export default createUsersTable;
