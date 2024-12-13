import { pool } from "../helpers/pool.js";

async function putLike(id, likes) {
  try {
    const consulta = "UPDATE posts SET likes = $1 WHERE id = $2";
    const values = [likes, id];
    const resultado = await pool.query(consulta, values);
    return resultado.rowCount;
  } catch (error) {
    console.log("Error al agregar Like", error);
    throw new Error(error.message);
  }
}

async function deletePost(id) {
  try {
    const consulta = "DELETE FROM posts WHERE id = $1";
    const values = [id];
    const resultado = await pool.query(consulta, values);
    return resultado.rowCount;
  } catch (error) {
    console.log("Error al eliminar post", error);
    throw new Error(error.message);
  }
}

export { putLike, deletePost };
