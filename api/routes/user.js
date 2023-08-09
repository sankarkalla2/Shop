const router = require('express').Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const UserSchema = require('../models/User');
const CryptoJS = require('crypto-js')

//update user
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

  if (!req.body.password) return res.status(500).json("sorry something went wrong");

  let { password } = req.body;
  password = CryptoJS.AES.encrypt(password, process.env.SEC_PWD).toString();
  req.body.password = password

  try {
    const newUser = await UserSchema.findOneAndUpdate({ _id: req.user.id }, { $set: req.body }, { new: true })
    const findUser = await UserSchema.findOne({ _id: req.user.id })
    return res.status(200).json(findUser);
  } catch (err) { res.status(400).json({ msg: err.message }) }
})

//delete user
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {

  try {
    const deletedUser = await UserSchema.findOneAndDelete({ _id: req.params.id })
    res.status(200).json(deletedUser);
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

//get user
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {

  try {
    const user = await UserSchema.findOne({ _id: req.params.id })

    const { password, ...others } = user._doc
    res.status(200).json(others);
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

//get all users
router.get('/', verifyTokenAndAdmin, async (req, res) => {

  const query = req.query.new
  try {
    const allUsers = query ? await UserSchema.find({}).limit(5) : await UserSchema.find({});

    res.status(200).json(allUsers)
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

//get stats
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))


  try {
    const data = await UserSchema.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        }
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 }
        }
      }
    ])

    return res.status(200).json(data);
  } catch (err) { res.status(500).json({ msg: err.message }) }
})


module.exports = router;