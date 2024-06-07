const express = require('express');
const { createJob, getJobs } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getJobs)
  .post(protect, createJob);

module.exports = router;
