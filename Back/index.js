import express from "express";
import cors from "cors";
import { pool } from "./helpers/pool.js";
import { borrarPost, manejoLike } from "./controllers/manejoLike.js";

const app = express();
const port = 3000;

// Midlewares
app.use(express.json());
app.use(cors());

// get
app.get("/posts", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});

//post
app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  try {
    await pool.query(
      "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)",
      [titulo, img, descripcion]
    );
    res.json({ message: "Post añadido" });
  } catch (error) {
    console.log(error);
  }
});

//Agregar Like
app.put("/posts/like/:id", manejoLike);
// Borrar Post
app.delete("/posts/:id", borrarPost);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
