import createBusinessAccTable from "./controller/createBusinessAccTable.js";
import createUsersTable from "./controller/createUserTable.js";

function initialize_pg(req, res) {
  try {
    createUsersTable();
    createBusinessAccTable();

    console.log("initialization done!");
    res.send("initialization done!");
  } catch (err) {
    console.log("error: ", errr);
  }
}

export default initialize_pg;
