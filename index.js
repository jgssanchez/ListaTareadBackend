import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/routes/listas.routes.js";
import './src/database/database.js'

const app = express();
app.set("port", process.env.PORT || 4002);

app.use(cors()); //permite conexiones remotas
app.use(morgan("dev")); //nos muestra info extra en la trminal
app.use(express.json()); //parsea los datos que vienen en formato json
app.use(express.urlencoded({ extended: true })); //para poder hacer peticiones de tipo POST y tener acceso a los datos deñ request

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/listas", router);

app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en el puerto: " + app.get("port"));
});
export default app;
