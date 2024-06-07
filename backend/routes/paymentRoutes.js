const express = require('express');
const { initializePayment, verifyPayment } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/initialize')
  .post(protect, initializePayment);

router.route('/verify')
  .get(protect, verifyPayment);

module.exports = router;
