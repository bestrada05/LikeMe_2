import { putLike, deletePost } from "../helpers/consultasDB.js";

const manejoLike = async (req, res) => {
  try {
    const { id } = req.params;
    const { likes } = req.query;

    await putLike(id, likes);

    res.json({ message: "Like actualizado" });
  } catch (error) {
    console.log("Error en manejoLike:", error);
    res.status(500).json({ error: "Error al dar like" });
  }
};

const borrarPost = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    res.json({ message: "Post eliminado" });
  } catch (error) {
    console.log("Error al eliminar post:", error);
    res.status(500).json({ error: "Error al eliminar post" });
  }
};

export { manejoLike, borrarPost };
