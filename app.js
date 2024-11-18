// app.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const { initializeDatabase } = require('./config/db.config');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

// Middlewares de Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de sesión
app.use(session({
  secret: process.env.SESSION_SECRET || 'clave_predeterminada',
  resave: false,
  saveUninitialized: true
}));

// Inicialización de Passport
app.use(passport.initialize());
app.use(passport.session());

// Inicializar la base de datos
initializeDatabase()
  .then(() => console.log('Base de datos inicializada correctamente'))
  .catch((error) => {
    console.error('No se pudo inicializar la base de datos:', error);
    process.exit(1);
  });

// Rutas
app.use('/api', routes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
