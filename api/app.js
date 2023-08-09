const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')

/** routes */
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const ordersRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URL).then(() => console.log('connected successfully...')).catch(err => console.error(err));

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', authRoute);
app.use('/api/v1/users', userRoute)
app.use('/api/v1/products', productRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/checkout', stripeRoute)


app.listen(PORT, () => {
  console.log("Backend server running on port 5000")
})