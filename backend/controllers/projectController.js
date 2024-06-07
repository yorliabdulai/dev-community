const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { title, description } = req.body;

  const project = new Project({
    title,
    description,
    createdBy: req.user._id,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate('createdBy', 'name email');
  res.json(projects);
};
