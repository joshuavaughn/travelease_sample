import pool from "../pool.js";

async function openBusinesAcc(req, res) {
  try {
    const { user_id } = req.params;
    const { businessname, businesstype } = req.body;

    const query = {
      name: "create-businessAcc",
      text: "INSERT INTO business_acc (user_id, business_name, business_type) VALUES ($1, $2, $3)",
      values: [user_id, businessname, businesstype],
    };

    const result = await pool.query(query);

    console.log("created business acc");
    res.send("created business acc");
  } catch (err) {
    console.log("error to create business acc", e);
    res.send("error to create business acc", e);
  }
}

export default openBusinesAcc;
