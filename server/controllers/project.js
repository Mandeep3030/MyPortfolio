import Project from "../models/Project.js";

// Get all projects
export const getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// Get one project
export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};

// Create project
export const createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
};

// Update project
export const updateProject = async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete single project
export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};

// Delete all projects
export const deleteAllProjects = async (req, res) => {
  await Project.deleteMany({});
  res.json({ message: "All projects deleted" });
};
