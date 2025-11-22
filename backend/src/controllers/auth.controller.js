import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = async (req, res) => {
  try {
    const {
      nombres,
      apellidos,
      nickname,
      telefono,
      genero,
      fechaNacimiento,
      email,
      password
    } = req.body;

    // 1. Validación básica
    if (!nombres || !apellidos || !nickname || !fechaNacimiento || !email || !password) {
      return res.status(400).json({ message: "Todos los campos obligatorios deben completarse" });
    }

    // 2. Verificar si el email ya existe
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // 3. Verificar si el nickname ya existe
    const nicknameExists = await User.findOne({ nickname });
    if (nicknameExists) {
      return res.status(400).json({ message: "El nickname ya está en uso" });
    }

    // 4. Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Crear usuario
    const newUser = await User.create({
      nombres,
      apellidos,
      nickname,
      telefono,
      genero,
      fechaNacimiento,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Usuario registrado exitosamente",
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
};
