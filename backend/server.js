import express from "express";
import cors from "cors";
import router from "./router/router.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api", router);

app.get("/", (req, res) => {
  console.log("welcome");
  res.send("welcome");
});

app.listen(3007, () => {
  console.log("listening on port 3007...");
});
