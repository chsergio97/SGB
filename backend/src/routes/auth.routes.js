import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP ─ Registro de usuarios
router.post("/signup", async (req, res) => {
  try {
    const {
      nombres,
      apellidos,
      nickname,
      email,
      password,
      telefono,
      genero,
      fechaNacimiento
    } = req.body;

    // 1. Validar campos requeridos
    if (!nombres || !apellidos || !nickname || !email || !password) {
      return res.status(400).json({
        message: "Faltan campos obligatorios"
      });
    }

    // 2A. Verificar EMAIL duplicado
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({
        message: "El correo ya está registrado"
      });
    }

    // 2B. Verificar NICKNAME duplicado
    const nicknameExists = await User.findOne({ nickname });
    if (nicknameExists) {
      return res.status(400).json({
        message: "El nickname ya está en uso"
      });
    }

    // 3. Hashear contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // 4. Crear nuevo usuario
    const newUser = new User({
      nombres,
      apellidos,
      nickname,
      email,
      password: hashedPassword,
      telefono,
      genero,
      fechaNacimiento
    });

    await newUser.save();

    res.status(201).json({
      message: "Usuario creado correctamente",
      user: {
        id: newUser._id,
        nombres: newUser.nombres,
        apellidos: newUser.apellidos,
        nickname: newUser.nickname,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error("Error en signup:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

export default router;
