const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(protect, createProject);

module.exports = router;
