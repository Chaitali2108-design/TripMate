const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("TripMate Backend is running!");
});

app.get("/api/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Database query failed",
      });
    }

    res.json({
      message: "Database query successful!",
      result: results[0].result,
    });
  });
});

app.post("/api/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: "Failed to create user",
        });
      }

      res.status(201).json({
        message: "User created successfully!",
        userId: result.insertId,
      });
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to process password",
    });
  }
});

app.get("/api/users", (req, res) => {
  const sql = "SELECT id, name, email, created_at FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to fetch users",
      });
    }

    res.json(results);
  });
});

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  const sql = `
    SELECT id, name, email, created_at
    FROM users
    WHERE id = ?
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed to fetch user",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(results[0]);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
