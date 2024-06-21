const User = require('../models/User');

exports.grantMentorAccess = async (req, res) => {
  const { mentorId } = req.body;

  const user = await User.findById(mentorId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.isMentor = true;
  await user.save();

  res.status(200).json({ message: 'Mentor access granted' });
};

exports.grantManagerAccess = async (req, res) => {
  const { managerId } = req.body;

  const user = await User.findById(managerId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.isManager = true;
  await user.save();

  res.status(200).json({ message: 'Manager access granted' });
};
