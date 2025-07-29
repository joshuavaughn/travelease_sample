import pool from "../pool.js";

async function viewUsers(req, res) {
  try {
    const query = {
      name: "view-users",
      text: "SELECT * FROM users",
    };

    const result = await pool.query(query);

    console.log("users: ", result.rows);
    res.send(result.rows);
  } catch (err) {
    console.log("view user error: ", err);
    res.send("view user error: ", err);
  }
}

export default viewUsers;
