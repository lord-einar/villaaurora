const adminMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'No autenticado' });
    }
  
    if (!req.user.admin) {
      return res.status(403).json({ message: 'No autorizado' });
    }
  
    next();
  };
  
  module.exports = adminMiddleware;
  