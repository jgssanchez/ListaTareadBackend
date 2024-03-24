import { Router } from "express";
import { obtenerLista } from "../controllers/listas.controllers.js";

const router = Router();

router.route('/obtener-lista').get(obtenerLista)

export default router;