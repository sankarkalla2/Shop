const router = require('express').Router()
const ProductSchema = require('../models/Product')
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken')

//add product
router.post('/', async (req, res) => {

  try {
    const schema = new ProductSchema(req.body);
    const product = await schema.save();

    res.status(200).json(product);
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

//update product

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

  try {
    await ProductSchema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
    const updatedProduct = await ProductSchema.findOne({ _id: req.params.id });

    res.status(200).json(updatedProduct)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

//deletedProduct
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {

  try {
    const deletedProduct = await ProductSchema.findOneAndDelete({ _id: req.params.id });

    res.status(200).json(updatedProduct)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

//get product
router.get('/:id', async (req, res) => {

  try {
    const product = await ProductSchema.findOne({ _id: req.params.id });

    console.log(req.user)
    console.log('hello worl')
    res.status(200).json(product)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})


//get all products
router.get('/', async (req, res) => {

  const query = req.query.new;
  const qCategory = req.query.category;
  let products
  try {
    if (query) products = await ProductSchema.find({}).sort({ createdAt: -1 }).limit(5);
    else if (qCategory) products = await ProductSchema.find({ categories: { $in: [qCategory] } })
    else {
      products = await ProductSchema.find({})
    }
    res.status(200).json(products)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

module.exports = router;