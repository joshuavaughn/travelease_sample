import pool from "../pool.js";

async function createUser(req, res) {
  try {
    const { username, firstname, lastname, pass } = req.body;

    const query = {
      name: "create-user",
      text: "INSERT INTO users (user_name, first_name, last_name, password) VALUES ($1, $2, $3, $4)",
      values: [username, firstname, lastname, pass],
    };

    const result = await pool.query(query);

    console.log("created user");
    res.send("created user");
  } catch (e) {
    console.log("error create", e);
    res.send("error create", e);
  }
}

export default createUser;
