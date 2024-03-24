export const obtenerLista = async (req, res) => {
  try {
    res.status(200).json({ mensaje: "lista" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al obtener la lista" });
  }
};
