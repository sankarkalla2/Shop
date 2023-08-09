const router = require('express').Router()
const CartSchema = require('../models/Cart')
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken')

//add cart
router.post('/', verifyTokenAndAuthorization, async (req, res) => {

  try {
    const cartSchema = new CartSchema(req.body);
    const cart = await CartSchema.save();

    res.status(200).json(cart);
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

//update cart

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

  try {
    await CartSchema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
    const updatedCart = await CartSchema.findOne({ _id: req.params.id });

    res.status(200).json(updatedCart)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

//deletedcart
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {

  try {
    const deletedCart = await CartSchema.findOneAndDelete({ _id: req.params.id });

    res.status(200).json(deletedCart)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

//get cart
router.get('/:userId', verifyTokenAndAuthorization, async (req, res) => {

  try {
    const cart = await CartSchema.find({ userId: req.params.userId });

    res.status(200).json(cart)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})


//get all carts
router.get('/', verifyTokenAndAdmin, async (req, res) => {

  try {
    const allCarts = await CartSchema.find({});
    res.status(200).json(allCarts)
  } catch (err) { res.status(200).json({ msg: err.message }) }

})

module.exports = router;
