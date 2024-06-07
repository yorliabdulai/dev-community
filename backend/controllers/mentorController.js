const Mentor = require('../models/Mentor');

exports.applyMentor = async (req, res) => {
  const { bio } = req.body;

  const mentor = new Mentor({
    userId: req.user._id,
    bio,
  });

  const createdMentor = await mentor.save();
  res.status(201).json(createdMentor);
};

exports.getMentorships = async (req, res) => {
  const mentorships = await Mentor.find().populate('userId', 'name email');
  res.json(mentorships);
};

exports.assignProject = async (req, res) => {
  const { projectId, menteeId } = req.body;

  const mentor = await Mentor.findOne({ userId: req.user._id });
  if (!mentor) {
    return res.status(404).json({ message: 'Mentor not found' });
  }

  mentor.projects.push(projectId);
  mentor.mentees.push(menteeId);
  await mentor.save();

  res.status(200).json({ message: 'Project assigned successfully' });
};
