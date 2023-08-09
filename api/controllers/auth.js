const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
  const { userName, email, isAdmin } = req.body
  const password = CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PWD).toString();
  const newUser = new User({ userName, email, password, isAdmin });

  try {
    const savedUserInfo = await newUser.save();
    res.status(200).json(savedUserInfo);
  } catch( err ) {
    res.status(500).json(err.message);
  }
}

const login = async(req, res) => {

  try {
    const user = await User.findOne({userName: req.body.userName});
    if(!user) return res.status(500).json("ented wrong credentials");

    const decryedPassword = CryptoJS.AES.decrypt(user.password, process.env.SEC_PWD);
    const OriginalPWD = decryedPassword.toString(CryptoJS.enc.Utf8);

    if(OriginalPWD !== req.body.password) return res.status(401).json("entered wriong credentials")

    const { password, ...others } = user._doc
    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
      }, 
      process.env.JWT_SEC_PWD,
      {expiresIn: "3d"}
    
    )

    res.status(200).json({...others, accessToken})
  } catch(err) {
    res.status(400).json(err.message)
  }
}


module.exports = {
  register,
  login
}