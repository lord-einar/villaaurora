
  // middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Error en el servidor' });
};

module.exports = errorHandler;
