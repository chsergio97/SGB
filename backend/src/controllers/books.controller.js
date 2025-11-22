import Book from "../models/Book.js";
import axios from "axios";

// Buscar libros desde Open Library
export const searchBooks = async (req, res) => {
  try {
    const { q } = req.query; // ?q=nombreDelLibro
    if (!q) return res.status(400).json({ message: "Debes ingresar un término de búsqueda" });

    const response = await axios.get(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(q)}`
    );

    const books = response.data.docs.slice(0, 20).map((item) => ({
      openLibraryId: item.key, // id de Open Library
      title: item.title || "Sin título",
      authors: item.author_name || ["Desconocido"],
      coverUrl: item.cover_i
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
        : "https://via.placeholder.com/120x180?text=No+Image",
      firstPublishYear: item.first_publish_year || "N/A",
    }));

    res.json(books);
  } catch (error) {
    console.error("Error al buscar libros:", error);
    res.status(500).json({ message: "Error al buscar libros" });
  }
};

// Reservar libro
export const reserveBook = async (req, res) => {
  try {
    const { openLibraryId, title, authors, coverUrl, firstPublishYear } = req.body;
    const userId = req.user.id;

    let book = await Book.findOne({ openLibraryId });

    if (!book) {
      book = await Book.create({
        openLibraryId,
        title,
        authors,
        coverUrl,
        firstPublishYear,
        available: false,
        reservedBy: userId,
      });
      return res.json({ message: "Libro reservado correctamente", book });
    }

    if (!book.available) {
      return res.status(400).json({ message: "Libro ya reservado" });
    }

    book.available = false;
    book.reservedBy = userId;
    await book.save();

    res.json({ message: "Libro reservado correctamente", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al reservar libro" });
  }
};

// Obtener libros reservados por el usuario
export const getMyReservations = async (req, res) => {
  try {
    const userId = req.user.id;
    const books = await Book.find({ reservedBy: userId });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener reservas" });
  }
};
