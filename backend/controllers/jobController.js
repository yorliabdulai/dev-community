const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description } = req.body;

  const job = new Job({
    title,
    description,
    createdBy: req.user._id,
  });

  const createdJob = await job.save();
  res.status(201).json(createdJob);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().populate('createdBy', 'name email');
  res.json(jobs);
};
