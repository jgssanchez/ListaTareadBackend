import { Schema } from "mongoose";
import mongoose from "mongoose";
const listaSchema = new Schema({

    descripcionTarea: {
        type: String,
        required: [true, 'La descripcion de la lista es obligatoria.'],
    },
});

const Lista = mongoose.model('Lista', listaSchema);
export default Lista;