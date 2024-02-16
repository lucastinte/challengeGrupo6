const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/api/api");

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT));

app.use("/api", apiRouter);
