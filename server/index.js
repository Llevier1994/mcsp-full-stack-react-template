import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = 3000;
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
const app = express();

app.use(express.json());

app.get("/api/tasks", (_, res) => {
  db.query("SELECT * FROM tasks").then((data) => {
    console.log(data.rows);
    res.json(data.rows);
  }); 
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
