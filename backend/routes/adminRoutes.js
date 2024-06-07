const express = require('express');
const { grantMentorAccess, grantManagerAccess } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/grant-mentor')
  .post(protect, admin, grantMentorAccess);

router.route('/grant-manager')
  .post(protect, admin, grantManagerAccess);

module.exports = router;
