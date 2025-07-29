import pool from "../pool.js";
import createToken from "../utils/createToken.js";

async function login(req, res) {
  try {
    const { user, pass } = req.body;

    const query = {
      name: "login",
      text: `SELECT password FROM users WHERE user_name = $1`,
      values: [user],
    };

    const result = await pool.query(query);

    console.log(result);

    if (pass == result.rows[0].password) {
      console.log("password match");
      console.log("login successful");
      // res.send("login successful");
      console.log("creating a token");
      const tokens = createToken(user, pass);
      console.log(tokens);

      console.log("refresh token: ", (await tokens).refresh);
      console.log("access token: ", (await tokens).access);
    } else {
      console.log("don't match");
      console.log("token not elligible");
    }
  } catch (err) {
    console.log("login error: ", err);
    res.send(`login error ${err}`);
  }
}

export default login;
