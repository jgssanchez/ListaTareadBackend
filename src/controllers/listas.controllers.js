import Lista from "../models/lista.model.js";

export const obtenerLista = async (req, res) => {
  try {
    res.status(200).json({ mensaje: "lista" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al obtener la lista" });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const { tarea } = req.body;
    if (!tarea)
      return res.status(400).json({ mensaje: "ingrese una tarea valida." });
    const lista = new Lista({ descripcionTarea: tarea });
    await lista.save();

    res.status(201).json({ mensaje: "Tarea creada con exito" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al crear la tarea" });
  }
};
 
export const obtenerTareas = async(req,res)=>{
  try {
    const listas = await Lista.find();
    res.status(200).json(listas);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al obtener las tareas" });
  }
}

export const borrarTarea = async(req,res)=>{
  try {
    const tareaEncontrada = await Lista.findById(req.params.id)
   if(!tareaEncontrada){
     return res.status(404).json({mensaje: 'El id enviado no corresponde a ninguna tarea'})
   }
   await Lista.findByIdAndDelete(req.params.id)
   res.status(200).json({mensaje: 'La tarea fue eliminada correctamente'})
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al eliminar la tarea" });
  }
}