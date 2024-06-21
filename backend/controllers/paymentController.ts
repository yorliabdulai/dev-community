const axios = require('axios');
const Payment = require('../models/Payment');
const User = require('../models/User');

exports.initializePayment = async (req, res) => {
  const { email, amount } = req.body;

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  const data = {
    email,
    amount: amount * 100, // Paystack expects amount in kobo
  };

  try {
    const response = await axios.post('https://api.paystack.co/transaction/initialize', data, config);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error initializing payment' });
  }
};

exports.verifyPayment = async (req, res) => {
  const { reference } = req.query;

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  };

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, config);
    const { status, customer, amount } = response.data.data;

    if (status === 'success') {
      const payment = new Payment({
        userId: req.user._id,
        amount: amount / 100,
        reference,
        status,
      });

      await payment.save();

      const user = await User.findById(req.user._id);
      user.isPremium = true;
      await user.save();

      res.json({ message: 'Payment verified and user upgraded to premium' });
    } else {
      res.status(400).json({ message: 'Payment verification failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error verifying payment' });
  }
};
