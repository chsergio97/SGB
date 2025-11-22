import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { searchBooks, reserveBook, getMyReservations } from "../controllers/books.controller.js";

const router = express.Router();

// Buscar libros (abierto)
router.get("/search", searchBooks);

// Reservar libro (requiere login)
router.post("/reserve", verifyToken, reserveBook);

// Obtener mis reservas (requiere login)
router.get("/my-reservations", verifyToken, getMyReservations);

export default router;
