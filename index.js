import  express  from "express"

const app =express();
app.set("port", process.env.PORT || 4002);
app.listen(app.get("port"), ()=>{
    console.log("Servidor corriendo en el puerto: "+app.get("port"));
});
