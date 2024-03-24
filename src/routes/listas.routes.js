import { Router } from "express";
import { crearTarea, borrarTarea, obtenerTareas } from "../controllers/listas.controllers.js";


const router = Router();



router.route('/crear-tarea').post(crearTarea)
router.route('/mostrar-tareas').get(obtenerTareas)
router.route('/borrar-tarea/:id').delete(borrarTarea)


export default router;