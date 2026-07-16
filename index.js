import express from "express";
import { Product, connectDB } from "./db.js";

const app = express();
const PORT = 5000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<b>Welcome to My Restful API using Sequelize</b>");
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
