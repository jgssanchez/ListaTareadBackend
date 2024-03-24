import { Router } from "express";
import { obtenerLista, crearLista } from "../controllers/listas.controllers.js";


const router = Router();


router.route('/obtener-lista').get(obtenerLista)
router.route('/crear-lista').post(crearLista)

export default router;