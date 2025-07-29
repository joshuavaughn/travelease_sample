import pool from "../pool.js";

async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const query = {
      name: "delete-user",
      text: `DELETE FROM users WHERE user_id = ${id}`,
    };

    const result = await pool.query(query);

    console.log("deleted user");
    res.send("deleted user");
  } catch (error) {
    console.log("delete user error: ", err);
    res.send("delete user error: ", err);
  }
}

export default deleteUser;
