const router = require('express').Router()
const OrderSchema = require('../models/Order')
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken')

//add order
router.post('/', verifyTokenAndAuthorization, async (req, res) => {

  try {
    const orderSchema = new OrderSchema(req.body);
    const order = await orderSchema.save();

    res.status(200).json(order);
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

//update order
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

  try {
    await OrderSchema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
    const updatedOrder = await OrderSchema.findOne({ _id: req.params.id });

    res.status(200).json(updatedOrder)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

// deletedorder
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {

  try {
    const deletedOrder = await OrderSchema.findOneAndDelete({ _id: req.params.id });

    res.status(200).json("your order has been deleted")

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

//get order
router.get('/:userId', verifyTokenAndAuthorization, async (req, res) => {

  try {
    const order = await OrderSchema.find({ userId: req.params.userId });

    res.status(200).json(order)

  } catch (err) { res.status(500).json({ msg: err.message }) }

})

//get all orders
router.get('/', verifyTokenAndAdmin, async (req, res) => {

  try {
    const allOrders = await OrderSchema.find({});

    res.status(200).json(allOrders)
  } catch (err) { res.status(500).json(err.message) }
})


//get monthly income
router.get('/income', verifyTokenAndAdmin, async (req, res) => {


  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderSchema.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount"
        }
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "sales" }
        }
      }
    ])

    res.status(200).json(income)
  } catch (err) { res.status(500).json({ msg: err.message }) }
})

module.exports = router;