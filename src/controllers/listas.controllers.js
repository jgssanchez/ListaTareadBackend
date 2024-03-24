import Lista from "../models/lista.model.js";

export const obtenerLista = async (req, res) => {
  try {
    res.status(200).json({ mensaje: "lista" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al obtener la lista" });
  }
};

export const crearLista = async (req, res) => {
  try {
    const { tarea } = req.body;
    if (!tarea)
      return res.status(400).json({ mensaje: "ingrese una tarea valida." });
    const lista = new Lista({ descripcionTarea: tarea });
    await lista.save();

    res.status(201).json({ mensaje: "Lista creada con exito" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al crear la lista" });
  }
};
