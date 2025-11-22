import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";  // <── IMPORTANTE
import { loginUser } from "./controllers/login.controller.js";
import userRoutes from './routes/user.routes.js'
import booksRoutes from "./routes/books.routes.js"

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB local
mongoose.connect("mongodb://127.0.0.1:27017/sgb")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Error al conectar Mongo:", err));

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

// Registrar rutas de auth
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginUser );  // login separado
app.use("/api/user", userRoutes);
app.use("/api/books", booksRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
