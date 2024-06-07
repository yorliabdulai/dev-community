const express = require('express');
const { applyMentor, getMentorships, assignProject } = require('../controllers/mentorController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getMentorships)
  .post(protect, applyMentor);

router.route('/assign')
  .post(protect, assignProject);

module.exports = router;
