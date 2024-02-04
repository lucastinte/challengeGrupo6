const express = require("express");
const app = express();
const apiRouter = require("./routes/api/api");
const cors=require("cors")

app.use(cors())
const PORT =  3001;
app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT));



app.use("/api", apiRouter);
