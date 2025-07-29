import pool from "../../pool.js";

async function createBusinessAccTable() {
  const query = `
  CREATE TABLE business_acc (
    business_id SERIAL PRIMARY KEY, 
    user_id int REFERENCES users(user_id),
    business_name TEXT NOT NULL, 
    location TEXT,
    business_type TEXT, 
    license_number TEXT, 
    operating_hours TEXT, 
    business_description TEXT
  );`;

  try {
    const result = await pool.query(query);
    console.log("created business account table");
  } catch (e) {
    console.log("error business acc table: ", e);
  }
}

export default createBusinessAccTable;
