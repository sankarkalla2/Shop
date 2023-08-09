const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY)

router.post('/payment', async (req, res) => {

  console.log(req.body)
  await stripe.paymentIntents.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: 'usd'
  }, (stripeErr, stripeRes) => {
    if (stripeErr) return res.status(500).json(stripeErr.message)
    res.status(200).json(stripeRes)
  })
})

module.exports = router