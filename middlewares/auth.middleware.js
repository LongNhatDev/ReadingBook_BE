const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ message: 'Not authorized, no token' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    console.log("decoded.id" + decoded.id);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
}
module.exports = { verifyToken};
