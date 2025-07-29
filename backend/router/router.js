import express from "express";
import createUser from "../user/createUser.js";
import initialize_pg from "../postgres/index.js";
import viewUsers from "../user/viewUsers.js";
import updateUser from "../user/updateUser.js";
import deleteUser from "../user/deleteUser.js";
import openBusinesAcc from "../business/openBusinessAcc.js";
import login from "../user/login.js";

const router = express.Router();

router.get("/init", initialize_pg);
// router.get("/create/:firstname/:lastname/:pass", createUser);
router.post("/create", createUser);
router.get("/users", viewUsers);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

router.post("/login", login);

router.post("/openBusinessAcc/:user_id", openBusinesAcc);

export default router;
