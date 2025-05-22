import bcrypt from "bcryptjs";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import pg from "pg";

const { Pool } = pg;

const app = express();
app.use(cors());
app.use(express.json());

// Configurar conexión PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "salud",
  password: "admin",
  port: 5432,
});

// Middleware para verificar token JWT
const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "Token requerido" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), "secreto");
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

// Ruta raíz
app.get("/", (req, res) => {
  res.send("✅ API de Salud funcionando correctamente.");
});

// Registro de usuario
app.post("/register", async (req, res) => {
  const { nombre, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING *",
      [nombre, email, hashedPassword]
    );
    res.status(201).json({ user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Login de usuario
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];

    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id }, "secreto", { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

// Guardar lectura del sensor (protegido opcional)
app.post("/lecturas", async (req, res) => {
  const { red, ir, t_obj, t_amb } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO lecturas (red, ir, t_obj, t_amb) VALUES ($1, $2, $3, $4) RETURNING *",
      [red, ir, t_obj, t_amb]
    );
    res.status(201).json({ lectura: result.rows[0] });
  } catch (error) {
    console.error("❌ Error al guardar lectura:", error);
    res.status(500).json({ error: "Error al guardar lectura" });
  }
});

// Obtener últimas lecturas
app.get("/lecturas", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM lecturas ORDER BY fecha DESC LIMIT 100"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error al obtener lecturas:", error);
    res.status(500).json({ error: "Error al obtener lecturas" });
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
