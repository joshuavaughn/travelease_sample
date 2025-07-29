import pool from "../pool.js";

async function updateUser(req, res) {
  try {
    const { id } = req.params;

    console.log("id params = ", id);

    const { firstname, lastname, pass } = req.body;

    const query = {
      name: "update-user",
      text: `
        UPDATE users
        SET first_name = $1, last_name = $2, password = $3
        WHERE user_id = ${id}`,
      values: [firstname, lastname, pass],
    };

    const result = await pool.query(query);

    console.log("updated user");
    res.send("updated user");
  } catch (err) {
    console.log("update user error: ", err);
    res.send("update user error: ", err);
  }
}

export default updateUser;
