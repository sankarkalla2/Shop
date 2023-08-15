
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authheader = req.headers.token;

  if (!authheader) return res.status(401).json({ msg: "you are not authenticated" })

  const token = authheader.split(" ")[1]
  jwt.verify(token, process.env.JWT_SEC_PWD, (err, user) => {
    if (err) return res.status(403).json({ msg: "token not valid anymore" })

    req.user = user;
    next()
  })

}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else res.status(500).json({ msg: "you are not allowed to that" })
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else res.status(500).json({ msg: "you are not allowed to that" })
  })
}

module.exports = {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken
}